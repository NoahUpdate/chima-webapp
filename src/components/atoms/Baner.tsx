import { Link } from 'react-router-dom'
const Baner = () => {
  return (
    <div className="w-full h-7.5 bg-pink flex justify-center items-center">
      <Link to={'/'} className="tracking-[0.51em] font-normal text-white hover:underline text-sm">
        • QUIERO SER <strong>MAYORISTA</strong> • INGRESA AQUÍ
      </Link>
    </div>
  )
}

export default Baner
