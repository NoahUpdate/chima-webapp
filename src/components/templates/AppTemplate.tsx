import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
export const AppTemplate = () => {
  // Estado para almacenar si hemos hecho scroll
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Cambia este valor según cuánto necesites hacer scroll
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  // Agregar y limpiar el evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { path: '/', name: 'INICIO' },
    { path: '/about', name: 'SOBRE MÍ' },
    { path: '/courses', name: 'CURSOS' },
    { path: '/contact', name: 'CONTACTO' }
  ]

  return (
    <div>
      <header
        className={`w-full ${scrolled ? 'h-[85px] lg:h-[72px] py-1.5 shadow-sombra' : 'h-24 py-1'} bg-papeln bg-center-top text-center flex transition-all duration-500 ease-in-out fixed z-10 filter saturate-50 brightness-115`}
      >
        <div className="max-w-[1618px] mx-auto w-full px-5 max-sm:px-2.5 self-center">
          <p className="lg:hidden font-main text-xs">Ayudo a emprendedores a vender más y dar a conocer su marca.</p>
          <div className="lg:hidden border-pink border-b mb-2 mt-0.5"></div>

          <div className="flex ">
            {/* Left section */}

            <div className="lg:hidden w-1/4 self-center pl-5">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl focus:outline-none">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Menú desplegable móvil */}
            <div
              className={`lg:hidden absolute top-full left-0 w-full bg-papeln shadow-lg transition-all duration-300 z-20 
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
              <div className="px-5 py-4 space-y-4 font-main text-base">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg ${isActive ? 'text-pink' : 'text-gray-800'} hover:text-pink transition-colors`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                {/* Enlaces a redes sociales para móvil */}
                <div className="flex justify-center gap-6 pt-4 border-t border-pink">
                  <Link
                    to="https://www.instagram.com/luisachima/"
                    target="_blank"
                    className="bg-instagramn w-8 h-8 bg-contain bg-no-repeat"
                  />
                  <Link
                    to="https://www.tiktok.com/@luisa.chima?lang=es"
                    target="_blank"
                    className="bg-tiktokn w-8 h-8 bg-contain bg-no-repeat"
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:flex w-1/3 items-center justify-center text-sm font-normal tracking-[1.7px]">
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'text-pink' : 'hover:text-pink'} hover:underline underline-offset-8`
                }
              >
                INICIO
              </NavLink>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'text-pink' : 'hover:text-pink'} hover:underline underline-offset-8`
                }
              >
                SOBRE MÍ
              </NavLink>
              <NavLink
                to={'/courses'}
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'text-pink' : 'hover:text-pink'} hover:underline underline-offset-8 flex items-center`
                }
              >
                CURSOS
                <FaChevronDown className="text-[16px] pl-1" />
              </NavLink>
              <NavLink
                to={'/contact'}
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'text-pink' : 'hover:text-pink'} hover:underline underline-offset-8`
                }
              >
                CONTACTO
              </NavLink>
            </div>

            {/* Middle section */}

            <div className={`w-2/4 lg:w-1/3 my-auto`}>
              <Link to={'/'}>
                <div
                  className={` ${scrolled ? 'h-[50px]' : 'h-[65px]'} bg-luisaBrand bg-contain bg-no-repeat bg-center transition-all duration-500 ease-in-out`}
                ></div>
              </Link>
            </div>

            {/* Right section */}

            <div className="w-1/4 lg:w-1/3 flex flex-col justify-center max-lg:flex-grow">
              <p className="max-lg:hidden font-main mb-2.5 text-sm leading-2.5">
                Ayudo a emprendedores a vender más y dar a conocer su marca.
              </p>
              <div className="max-lg:hidden border-pink border-b"></div>
              <div className="h-7 flex justify-center items-center gap-5 pt-1.5 ">
                <Link
                  to={'https://www.instagram.com/luisachima/'}
                  target="_blank"
                  className="bg-instagramn w-6 h-6 bg-contain bg-no-repeat bg-center"
                ></Link>
                <Link
                  to={'https://www.tiktok.com/@luisa.chima?lang=es'}
                  target="_blank"
                  className="bg-tiktokn w-6 h-6 bg-contain bg-no-repeat bg-center"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* 
      <footer className="w-full on:h-[334px] translate-y-24 bg-cherry-pink pt-10 pb-5">
        <div className="w-max lg:max-w-6xl mx-auto font-main flex justify-center items-center flex-col">
          <div className="w-full">
            <div className="py-2">
              <div className="h-16 bg-luisaBrand bg-contain bg-no-repeat bg-center"></div>
            </div>
            <div className="h-11 uppercase flex justify-center items-center gap-4 pt-1.5">
              <span className='max-sm:hidden'>síguenos en nuestras redes sociales</span>
              <Link
                to={'https://www.instagram.com/luisachima/'}
                target="_blank"
                className="bg-instagram w-10 h-10 bg-contain bg-no-repeat bg-center"
              ></Link>
              <Link
                to={'https://www.tiktok.com/@luisa.chima?lang=es'}
                target="_blank"
                className="bg-tiktok w-10 h-10 bg-contain bg-no-repeat bg-center"
              ></Link>
            </div>
            <div className="border-white border-b m-5"></div>
            <p className="mb-2.5 text-sm uppercase flex gap-10 justify-center font-normal max-on:flex-col max-on:gap-2 max-on:items-center">
              <Link to={'/'} className="hover:underline tracking-[0.125em]">
                inicio
              </Link>
              <Link to={'/about'} className="hover:underline tracking-[0.125em]">
                Sobre mí
              </Link>
              <Link to={''} className="hover:underline  tracking-[0.125em]">
                cursos
              </Link>
              <Link to={''} className="hover:underline tracking-[0.125em]">
                Términos y condiciones
              </Link>
              <Link to={'/contact'} className="hover:underline tracking-[0.125em]">
                contacto
              </Link>
            </p>
            <div className="border-white border-b m-5"></div> 
            <div className="mx-5 mt-6 flex justify-center">
              <p className="text-xs my-2.5 tracking-widest flex ">
                COPYRIGHT 2023 © LUISA CHIMA. | TODOS LOS DERECHOS RESERVADOS - DISEÑO DE PÁGINAS WEB POR P&P GROUP
                S.A.S.
              </p>
            </div>
          </div>
        </div>
      </footer>
            */}

      <footer className="w-full bg-cherry-pink pt-10 pb-5 translate-y-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-main">
          <div className="w-full">
            {/* Logo */}
            <div className="py-2 flex justify-center">
              <div className="h-16 bg-luisaBrand bg-contain bg-no-repeat bg-center w-full max-w-[200px]"></div>
            </div>

            {/* Redes Sociales */}
            <div className="h-auto py-4 uppercase flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
              <span>síguenos en nuestras redes sociales</span>
              <div className="flex gap-3">
                <Link
                  to={'https://www.instagram.com/luisachima/'}
                  target="_blank"
                  className="bg-instagram w-8 h-8 md:w-10 md:h-10 bg-contain bg-no-repeat bg-center"
                ></Link>
                <Link
                  to={'https://www.tiktok.com/@luisa.chima?lang=es'}
                  target="_blank"
                  className="bg-tiktok w-8 h-8 md:w-10 md:h-10 bg-contain bg-no-repeat bg-center"
                ></Link>
              </div>
            </div>

            {/* Divisor */}
            <div className="border-white border-b mx-5 my-4 md:my-5"></div>

            {/* Enlaces */}
            <nav className="mb-2.5 text-sm uppercase flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center items-center font-normal">
              <Link to={'/'} className="hover:underline tracking-[0.125em]">
                inicio
              </Link>
              <Link to={'/about'} className="hover:underline tracking-[0.125em]">
                Sobre mí
              </Link>
              <Link to={''} className="hover:underline tracking-[0.125em]">
                cursos
              </Link>
              <Link to={''} className="hover:underline tracking-[0.125em]">
                Términos y condiciones
              </Link>
              <Link to={'/contact'} className="hover:underline tracking-[0.125em]">
                contacto
              </Link>
            </nav>

            {/* Divisor */}
            <div className="border-white border-b mx-5 my-4 md:my-5"></div>

            {/* Copyright */}
            <div className="mx-5 mt-6 flex justify-center">
              <p className="text-xs my-2.5 tracking-widest text-center px-4">
                COPYRIGHT 2023 © LUISA CHIMA. | TODOS LOS DERECHOS RESERVADOS - DISEÑO DE PÁGINAS WEB POR E&E GROUP
                S.A.S.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
