'use client';

import { useState } from 'react';

export default function AIMentor() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', content: 'Olá! Eu sou seu mentor IA. Como posso ajudar você hoje com seus estudos?' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { role: 'user', content: message }]);
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Esta é uma resposta simulada do mentor IA. Em uma implementação real, isso viria da API de IA.' 
        }
      ]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mentor IA</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold">Converse com seu mentor pessoal</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tire dúvidas, peça recomendações de estudo ou orientação acadêmica
          </p>
        </div>
        
        {/* Chat history */}
        <div className="p-4 h-96 overflow-y-auto">
          {chatHistory.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}
            >
              <div 
                className={`inline-block p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                } max-w-[80%]`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        
        {/* Message input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      
      {/* Suggestions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Sugestões de perguntas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            className="p-3 text-left text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={() => setMessage('Como posso melhorar meu desempenho em Física?')}
          >
            Como posso melhorar meu desempenho em Física?
          </button>
          <button 
            className="p-3 text-left text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={() => setMessage('Quais recursos você recomenda para estudar Cálculo?')}
          >
            Quais recursos você recomenda para estudar Cálculo?
          </button>
          <button 
            className="p-3 text-left text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={() => setMessage('Crie um plano de estudos para minha próxima prova')}
          >
            Crie um plano de estudos para minha próxima prova
          </button>
          <button 
            className="p-3 text-left text-sm bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={() => setMessage('Quais são minhas áreas de melhoria com base no meu desempenho?')}
          >
            Quais são minhas áreas de melhoria com base no meu desempenho?
          </button>
        </div>
      </div>
    </div>
  );
}
