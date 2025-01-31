import Baner from '../atoms/Baner'
import FormBase from '../atoms/FormBase'

export const Contact = () => {
  return (
    <div className="translate-y-24">
      <div className=" w-[1100px] flex mx-auto">
        <div className="w-[46%] my-auto relative">
          <div className="w-full h-[561px] bg-[#FCEEF0]"></div>
          <img
            src="src/assets/images/peso-min.png"
            className="py-[50px] absolute right-0 -top-13 max-w-[556px] h-auto object-cover"
          />
        </div>
        <div className="w-[54%] ml-[50px] mt-2.5">
          <div className="flex flex-col items-center mt-5">
            <h1 className="font-submain font-normal text-[56px] leading-4 text-dark-pink mt-12.5">
              ¿Tienes preguntas?
            </h1>
            <h1 className="font-main font-bold text-[46px] tracking-[5px] uppercase">contáctenos</h1>
          </div>
          <FormBase></FormBase>
        </div>
      </div>
      <Baner></Baner>
    </div>
  )
}
