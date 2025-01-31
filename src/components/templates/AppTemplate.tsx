import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
export const AppTemplate = () => {
  // Estado para almacenar si hemos hecho scroll
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <div>
      <header
        className={`w-full ${scrolled ? 'h-[72px] py-1.5 shadow-sombra' : 'h-24 py-1'} bg-papeln bg-center-top text-center flex transition-all duration-500 ease-in-out fixed z-10 filter saturate-50 brightness-115`}
      >
        <div className="min-w-[1618px] mx-auto flex ">
          {/* Left section */}

          <div className="w-1/3 flex items-center justify-center text-sm font-normal tracking-[1.7px]">
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

          <div className={`w-1/3 my-auto`}>
            <Link to={'/'}>
              <div
                className={` ${scrolled ? 'h-[50px]' : 'h-[65px]'} bg-luisaBrand bg-contain bg-no-repeat bg-center transition-all duration-500 ease-in-out`}
              ></div>
            </Link>
          </div>

          {/* Right section */}

          <div className="w-1/3 flex flex-col justify-center">
            <p className="font-main mb-2.5 text-sm">Ayudo a emprendedores a vender más y dar a conocer su marca.</p>
            <div className="border-pink border-b"></div>
            <div className="h-7 flex justify-center items-center gap-5 pt-1.5">
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
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="w-full h-[334px] translate-y-24 bg-cherry-pink pt-10 pb-5">
        <div className="w-6xl mx-auto font-main flex justify-center items-center flex-col">
          <div className="w-full">
            <div className="py-2">
              <div className="h-16 bg-luisaBrand bg-contain bg-no-repeat bg-center"></div>
            </div>
            <div className="h-11 uppercase flex justify-center items-center gap-4 pt-1.5">
              síguenos en nuestras redes sociales
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
            <p className="mb-2.5 text-sm uppercase flex gap-10 justify-center font-normal">
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
              <p className="text-xs my-2.5 tracking-widest">
                COPYRIGHT 2023 © LUISA CHIMA. | TODOS LOS DERECHOS RESERVADOS - DISEÑO DE PÁGINAS WEB POR P&P GROUP
                S.A.S.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
