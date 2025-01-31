import { Link } from 'react-router-dom'

interface CardProps {
  button?: boolean
}

const Card: React.FC<CardProps> = ({ button = false }) => {
  return (
    <div className="rounded-[20px] shadow-sombra my-[50px] mr-[50px] w-full flex flex-col justify-center">
      <p className="text-[76px] pt-10 font-normal text-center font-submain text-dark-pink leading-6 relative flex justify-center items-center">
        Conoce más
        <img src="src/assets/images/deco1.png" alt="decoration1" className="absolute max-w-[325px] pt-1.5" />
      </p>
      <h1 className="text-[62px] font-bold font-main text-center tracking-[5px]">SOBRE MÍ</h1>
      <div className="relative">
        <img src="src/assets/images/deco.png" alt="decoration2" className="transform translate-x-[412px]" />
      </div>

      <div className="text-[19px] font-main px-10 py-5 text-justify font-light">
        <p className="mb-2.5">
          Desde muy joven siempre siempre supe que quería emprender, conseguir mi propio dinero y ser grande, muy
          grande.
        </p>
        <p className="mb-2.5">
          Soy partidaria de que las mujeres llegamos a este mundo para triunfar y lograr todo lo que añoramos.
        </p>
        <p className="mb-2.5">Soñar no cuesta, pero no ir detrás de objetivos si.</p>
        <p>Soy mamá, empresaria. Amo aprender, investigar y enseñar.</p>
      </div>

      <div className="flex justify-center">
        {button && (
          <button className="flex items-center justify-center text-base w-[200px] h-[46px] font-normal bg-cherry-pink rounded-[5px] hover:bg-black hover:text-white transition-all duration-200 uppercase tracking-[1px]">
            <Link to={'/about'}>• Leer más •</Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default Card
