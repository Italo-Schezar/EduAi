import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            <span className="gradient-text">EduAI</span>: Aprendizado Inteligente
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Plataforma educacional inteligente com IA + Estatísticas, voltada para jovens e adultos que buscam aprofundamento científico.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link href="/login" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light dark:focus:ring-primary-dark">
              Começar agora
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Saiba mais
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <div className="relative w-full h-full min-h-[400px]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-light to-secondary-light opacity-20 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#4F46E5" d="M45.7,-76.2C59.3,-69.2,70.7,-57.7,78.7,-44.1C86.7,-30.5,91.3,-15.2,89.8,-0.9C88.3,13.5,80.6,27,71.9,39.7C63.2,52.4,53.4,64.3,41,71.3C28.5,78.3,14.3,80.4,-0.2,80.7C-14.7,81,-29.4,79.5,-41.6,72.5C-53.8,65.5,-63.5,53,-71.3,39.7C-79.1,26.3,-85,13.2,-85.6,-0.3C-86.2,-13.9,-81.5,-27.7,-73.4,-39.2C-65.3,-50.7,-53.8,-59.8,-41.1,-67.4C-28.4,-75,-14.2,-81.1,0.8,-82.5C15.8,-83.9,31.7,-80.6,45.7,-73.6Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">IA</div>
                <div className="text-xl font-medium text-white">+</div>
                <div className="text-2xl font-semibold text-white mt-2">Estatísticas</div>
                <div className="text-xl font-medium text-white mt-4">= Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
