import Baner from '../atoms/Baner'
import Carrousel from '../atoms/Carrousel'
import { slides } from '../constants/Slides'
import Card from '../molecules/Card'
export const Home = () => {
  return (
    <section className="w-full translate-y-24">
      <Baner />
      <Carrousel slides={slides} autoSlides={true} autoSlidesInterval={3000}></Carrousel>
      <div className="h-[766px]">
        <div className="mx-auto max-w-[1100px] h-full flex">
          <Card button={true} />
          <div className="p-5 h-full">
            <div className="w-[488px] h-full bg-luisa bg-cover"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
