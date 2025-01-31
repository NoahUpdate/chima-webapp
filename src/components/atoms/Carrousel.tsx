import { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa6'

interface CarrouselProps {
  slides: string[]
  autoSlides?: boolean
  autoSlidesInterval?: number
}

const Carrousel: React.FC<CarrouselProps> = ({ slides, autoSlides = false, autoSlidesInterval = 3000 }) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1)

  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1)

  useEffect(() => {
    if (autoSlides) {
      const interval = setInterval(next, autoSlidesInterval)
      return () => clearInterval(interval)
    }
    return () => {} // cleanup function to clear the interval on unmounting
  })
  return (
    <div className="w-full mx-auto overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-900"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <img src={s} />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={prev} className="p-1.5 cursor-pointer hover:scale-125 ease-in duration-300">
          <FaChevronLeft className="text-[32px] text-white/80 hover:text-white" />
        </button>
        <button onClick={next} className="p-1.5 cursor-pointer hover:scale-125 ease-in duration-300">
          <FaChevronRight className="text-[32px] text-white/80 hover:text-white" />
        </button>
      </div>
    </div>
  )
}
export default Carrousel
