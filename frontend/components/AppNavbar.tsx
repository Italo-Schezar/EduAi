'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <button 
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-2"
            aria-controls="sidebar"
            aria-expanded="false"
          >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <Link href="/app" className="flex items-center space-x-3">
            <Image 
              src="/eduai-logo.svg" 
              alt="EduAI Logo" 
              width={150} 
              height={45} 
              priority
            />
          </Link>
        </div>
        
        <div className="flex items-center">
          <button 
            type="button" 
            className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
            id="user-menu-button" 
            aria-expanded={isProfileOpen} 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
          </button>
          
          {/* Dropdown menu */}
          <div 
            className={`${isProfileOpen ? 'block' : 'hidden'} absolute top-10 right-4 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} 
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Usuário Demo</span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">usuario@exemplo.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link href="/app/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Perfil
                </Link>
              </li>
              <li>
                <Link href="/app/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Configurações
                </Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
