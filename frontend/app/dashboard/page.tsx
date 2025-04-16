import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Card 1 - Progresso */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Seu Progresso</h2>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Matemática</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Física</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Química</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Próximas Atividades */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Próximas Atividades</h2>
              <ul className="space-y-3">
                <li className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="w-3 h-3 rounded-full bg-primary mr-3"></span>
                  <div>
                    <p className="text-sm font-medium">Revisão de Cálculo</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Hoje, 14:00</p>
                  </div>
                </li>
                <li className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3"></span>
                  <div>
                    <p className="text-sm font-medium">Prática de Laboratório</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Amanhã, 10:30</p>
                  </div>
                </li>
                <li className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="w-3 h-3 rounded-full bg-accent mr-3"></span>
                  <div>
                    <p className="text-sm font-medium">Entrega de Projeto</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Sexta, 23:59</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Card 3 - Recomendações */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Recomendações do IA Mentor</h2>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm">Dedique mais tempo aos estudos de Física, sua área com menor progresso.</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm">Revise os conceitos de Álgebra Linear antes da próxima aula de Cálculo.</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm">Seu desempenho em Química está melhorando! Continue com os exercícios práticos.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gráfico de Desempenho */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Desempenho ao Longo do Tempo</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Gráfico de desempenho será exibido aqui</p>
            </div>
          </div>
          
          {/* Seção de Metas */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Suas Metas</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="goal-1" type="checkbox" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="goal-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Completar curso de Cálculo Avançado</label>
              </div>
              <div className="flex items-center">
                <input id="goal-2" type="checkbox" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="goal-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Melhorar nota em Física para acima de 8.0</label>
              </div>
              <div className="flex items-center">
                <input id="goal-3" type="checkbox" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="goal-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Concluir projeto de pesquisa em Química</label>
              </div>
              <div className="flex items-center">
                <input id="goal-4" type="checkbox" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="goal-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estudar pelo menos 2 horas por dia</label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
