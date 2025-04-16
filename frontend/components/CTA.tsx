import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Comece sua jornada de aprendizado hoje
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Junte-se a milhares de estudantes que estão transformando sua educação com a EduAI.
          </p>
          <Link href="/register" className="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-light font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:hover:bg-primary-dark focus:outline-none dark:focus:ring-primary-light">
            Criar conta gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
