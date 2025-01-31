import Baner from '../atoms/Baner'
import FormBase from '../atoms/FormBase'

export const Contact = () => {
  return (
    // <div className="translate-y-24">
    //   <div className=" w-[1100px] flex mx-auto">
    //     <div className="w-[46%] my-auto relative">
    //       <div className="w-full h-[561px] bg-[#FCEEF0]"></div>
    //       <img
    //         src="src/assets/images/peso-min.png"
    //         className="py-[50px] absolute right-0 -top-13 max-w-[556px] h-auto object-cover"
    //       />
    //     </div>
    //     <div className="w-[54%] ml-[50px] mt-2.5">
    //       <div className="flex flex-col items-center mt-5">
    //         <h1 className="font-submain font-normal text-[56px] leading-4 text-dark-pink mt-12.5">
    //           ¿Tienes preguntas?
    //         </h1>
    //         <h1 className="font-main font-bold text-[46px] tracking-[5px] uppercase">contáctenos</h1>
    //       </div>
    //       <FormBase></FormBase>
    //     </div>
    //   </div>
    //   <Baner></Baner>
    // </div>
    <div className="translate-y-24">
      <div className="max-w-[1100px] w-full flex flex-col max-lg:h-[1400px] lg:flex-row mx-auto">
        {/* Sección izquierda con imagen */}
        <div className="w-full lg:w-[46%] flex items-center justify-center mt-12 lg:mt-0 order-2 lg:order-1">
          <div className=" bg-[#FCEEF0] rounded-lg " />
          <img
            src="src/assets/images/peso-min.png"
            className="py-4 w-full max-w-[80%] md:max-w-[556px] md:w-max object-cover z-50"
          />
        </div>

        {/* Sección derecha con formulario */}
        <div className="w-full lg:w-[54%] lg:ml-[50px] mt-8 lg:mt-2.5 order-1 lg:order-2">
          <div className="flex flex-col items-center text-center lg:text-left">
            <h1 className="font-submain font-normal text-4xl lg:text-[56px] leading-tight text-dark-pink mt-6 lg:mt-12.5">
              ¿Tienes preguntas?
            </h1>
            <h1 className="font-main font-bold text-3xl md:text-[46px] tracking-[1px] md:tracking-[5px] uppercase mt-4">
              contáctenos
            </h1>
          </div>
          <div className="px-4 md:px-0">
            <FormBase />
          </div>
        </div>
      </div>

      <Baner />
    </div>
  )
}
