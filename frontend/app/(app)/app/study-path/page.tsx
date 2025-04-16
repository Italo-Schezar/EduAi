export default function StudyPath() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sua Trilha de Estudo</h1>
      
      {/* Progresso geral */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Progresso Geral</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-2">
          <div className="bg-primary h-4 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Iniciante</span>
          <span>Intermediário</span>
          <span>Avançado</span>
        </div>
      </div>
      
      {/* Trilha de estudo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Matemática Avançada</h2>
          <span className="px-3 py-1 text-xs font-medium bg-primary-light text-primary rounded-full">Em progresso</span>
        </div>
        
        <div className="relative">
          {/* Linha vertical conectando os módulos */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Módulos */}
          <div className="space-y-8">
            {/* Módulo 1 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fundamentos de Cálculo</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Limites, derivadas e integrais básicas.
              </p>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">Concluído</span>
            </div>
            
            {/* Módulo 2 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Cálculo Multivariável</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Derivadas parciais, integrais múltiplas e aplicações.
              </p>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">Concluído</span>
            </div>
            
            {/* Módulo 3 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Equações Diferenciais</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                EDOs de primeira e segunda ordem, sistemas de equações.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mb-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-xs font-medium text-primary">60% concluído</span>
            </div>
            
            {/* Módulo 4 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Análise Complexa</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Funções complexas, integração e séries.
              </p>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Bloqueado</span>
            </div>
            
            {/* Módulo 5 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">5</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Métodos Numéricos</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Aproximação, interpolação e integração numérica.
              </p>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Bloqueado</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recomendações */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recomendações para Avançar</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Recursos para Equações Diferenciais</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>Livro: "Equações Diferenciais Elementares" - Boyce & DiPrima</li>
              <li>Vídeo-aulas: Série de EDO do Professor Ricardo</li>
              <li>Exercícios práticos: Lista 3 do material complementar</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-medium mb-2">Próximos Passos</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Concentre-se em completar o módulo de Equações Diferenciais antes de avançar. 
              Recomendamos dedicar pelo menos 2 horas por dia para concluir em 2 semanas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
