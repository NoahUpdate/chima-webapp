import Baner from '../atoms/Baner'
import Carrousel from '../atoms/Carrousel'
import { slides } from '../constants/Slides'
import Card from '../molecules/Card'
export const Home = () => {
  return (
    <section className="w-full translate-y-24">
      <Baner />
      <Carrousel slides={slides} autoSlides={true} autoSlidesInterval={3000}></Carrousel>
      <div className="h-[1500px] lg:h-[766px] max-sm:h-[1250px]">
        <div className="mx-5 lg:mx-auto max-w-[1100px] h-full flex max-lg:flex-col">
          <Card button={true} />
          <div className="sm:p-5 h-full max-lg:mx-auto">
            <div className="max-sm:w-[320px] w-[488px] bg-luisa bg-cover bg-center sm:h-full max-sm:aspect-[2/3]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
