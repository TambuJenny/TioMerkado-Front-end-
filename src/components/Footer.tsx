import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>

      <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 dark:text-teal-300 sm:justify-start">
                <div className=" pb-12">
                  <Link
                    to="/"
                    className="text-4xl text-transparent bg-gradient-blue bg-clip-text"
                  >
                    <span className="font-black">Tio</span>/Merkado
                  </Link>
                 
                  <p>
                    <small className="text-transparent bg-gradient-blue bg-clip-text">Casa de computador</small>
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 sm:mx-0 sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>

              <div className="mt-8 text-white flex justify-center gap-6 sm:justify-start md:gap-8">
                <Link
                  to=""
                  className="flex justify-center items-center space-x-10"
                >
                  <FacebookLogo size={32} />
                </Link>
                <Link
                  to=""
                  className="flex justify-center items-center space-x-10"
                >
                  <TwitterLogo size={32} />
                </Link>
                <Link
                  to=""
                  className="flex justify-center items-center space-x-10"
                >
                  <InstagramLogo size={32} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                Página
                </p>

                <nav aria-label="Footer About Nav" className="mt-8 text-white">
                  <div className="space-y-4 text-sm">
                  <Link
                  to=""
                  className="flex justify-start items-center space-x-10"
                >
                  Blog
                </Link>

                <Link
                  to=""
                  className="flex justify-start items-center space-x-10"
                >
                  FAQ
                </Link>

                <Link
                  to=""
                  className="flex justify-start items-center space-x-10"
                >
                  Suporte
                </Link>
                  </div>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white dark:text-white">
                Carreiras
                </p>
                <nav aria-label="Footer Services Nav" className="mt-8">
                  <div className="space-y-4 text-sm text-white">
                  <Link
                  to=""
                  className="flex justify-start items-center space-x-10 "
                >
                  Trabalhar Conosco
                </Link>

                <Link
                  to=""
                  className="flex justify-start items-center space-x-10"
                >
                  Ser Parceiro
                </Link>

                  </div>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Regras de Negócio
                </p>

                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <div className="space-y-4 text-sm text-white">
                  <Link
                  to=""
                  className="flex justify-start items-center space-x-10"
                >
                  Nossas Regras
                </Link>

                <Link
                  to=""
                  className="flex justify-start items-center space-x-10"
                >
                  Garantia
                </Link>
                  </div>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  Contact Us
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="text-gray-700 dark:text-gray-300">
                        john@doe.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 shrink-0 text-gray-900 dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="text-gray-700 dark:text-gray-300">
                        0123456789
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900 dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 not-italic text-gray-700 dark:text-gray-300">
                      213 Lane, London, United Kingdom
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="block sm:inline">Todos direitos reservado.</span>
              </p>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:order-first sm:mt-0">
                &copy; 2022 By Tambu M. Jenny
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
