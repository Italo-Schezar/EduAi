'use client';

import { useState } from 'react';

export default function Calendar() {
  const [currentMonth] = useState('Junho 2024');
  
  // Mock data for calendar events
  const events = [
    { id: 1, date: '2024-06-05', title: 'Aula de Cálculo', time: '10:00 - 11:30', type: 'class' },
    { id: 2, date: '2024-06-05', title: 'Estudo em Grupo', time: '14:00 - 16:00', type: 'study' },
    { id: 3, date: '2024-06-07', title: 'Prova de Física', time: '09:00 - 11:00', type: 'exam' },
    { id: 4, date: '2024-06-10', title: 'Entrega de Projeto', time: '23:59', type: 'deadline' },
    { id: 5, date: '2024-06-12', title: 'Laboratório de Química', time: '13:30 - 15:30', type: 'lab' },
    { id: 6, date: '2024-06-15', title: 'Revisão para Prova', time: '16:00 - 18:00', type: 'study' },
  ];

  // Generate calendar days (simplified for demo)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  
  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    const dateStr = `2024-06-${day.toString().padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Calendário de Estudos</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
        {/* Calendar header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </button>
          <h2 className="text-xl font-semibold">{currentMonth}</h2>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        
        {/* Calendar weekdays */}
        <div className="grid grid-cols-7 text-center py-2 border-b border-gray-200 dark:border-gray-700">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
            <div key={index} className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1 p-2">
          {/* Empty cells for days before the 1st of the month (simplified) */}
          {[...Array(6)].map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square p-1"></div>
          ))}
          
          {/* Actual days */}
          {days.map(day => {
            const dayEvents = getEventsForDay(day);
            const hasEvents = dayEvents.length > 0;
            
            return (
              <div 
                key={day} 
                className={`aspect-square p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative ${
                  hasEvents ? 'bg-gray-50 dark:bg-gray-700' : ''
                }`}
              >
                <div className="text-sm font-medium">{day}</div>
                
                {/* Event indicators */}
                {hasEvents && (
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-1">
                    {dayEvents.slice(0, 3).map((event, index) => (
                      <span 
                        key={index} 
                        className={`w-1.5 h-1.5 rounded-full ${
                          event.type === 'class' ? 'bg-primary' :
                          event.type === 'exam' ? 'bg-red-500' :
                          event.type === 'deadline' ? 'bg-orange-500' :
                          event.type === 'lab' ? 'bg-purple-500' :
                          'bg-green-500'
                        }`}
                      ></span>
                    ))}
                    {dayEvents.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">+{dayEvents.length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Upcoming events */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Próximos Eventos</h2>
        <div className="space-y-4">
          {events.map(event => (
            <div 
              key={event.id} 
              className="p-4 rounded-lg border-l-4 bg-gray-50 dark:bg-gray-700 flex justify-between items-center"
              style={{
                borderLeftColor: 
                  event.type === 'class' ? 'var(--primary)' :
                  event.type === 'exam' ? '#ef4444' :
                  event.type === 'deadline' ? '#f97316' :
                  event.type === 'lab' ? '#a855f7' :
                  '#22c55e'
              }}
            >
              <div>
                <h3 className="font-medium">{event.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(event.date).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })} • {event.time}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
