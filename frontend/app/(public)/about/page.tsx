import Image from 'next/image';

export default function About() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Sobre a <span className="gradient-text">EduAI</span>
        </h2>
        <p className="mb-4 font-light">
          A EduAI nasceu da visão de transformar a educação através da tecnologia, combinando inteligência artificial avançada com análise estatística para criar uma experiência de aprendizado verdadeiramente personalizada.
        </p>
        <p className="mb-4 font-light">
          Nossa plataforma foi desenvolvida por uma equipe de educadores, cientistas de dados e desenvolvedores apaixonados por educação e tecnologia, com o objetivo de democratizar o acesso a um aprendizado de alta qualidade.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Nossa Missão</h3>
            <p className="font-light">
              Capacitar estudantes de todas as idades a alcançarem seu pleno potencial acadêmico através de tecnologia inteligente e personalizada.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Nossa Visão</h3>
            <p className="font-light">
              Um mundo onde cada pessoa tenha acesso a uma educação personalizada e eficiente, adaptada às suas necessidades individuais.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Como Funciona</h3>
        <p className="mb-4 font-light">
          A EduAI utiliza algoritmos avançados de aprendizado de máquina para analisar seu desempenho, identificar padrões e criar recomendações personalizadas. Nossa plataforma se adapta continuamente ao seu progresso, garantindo que você esteja sempre desafiado no nível adequado.
        </p>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Nossa Equipe</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 w-36 h-36 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Nome do Membro {i}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cargo na Empresa</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
