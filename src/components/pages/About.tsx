import Card from '../molecules/Card'

export const About = () => {
  return (
    <>
      <section className="translate-y-24">
        {/* <div className="h-[766px]">
          <div className="mx-auto max-w-[1100px] h-full flex ">
            //card
            <div className="rounded-[20px] shadow-sombra my-[50px] mr-[50px] w-full flex flex-col justify-center">
              <p className="text-[76px] pt-10 font-normal text-center font-submain text-dark-pink leading-6 relative flex justify-center items-center">
                Conoce más
                <img src="src/assets/images/deco1.png" alt="decoration1" className="absolute max-w-[325px] pt-1.5" />
              </p>
              <h1 className="text-[62px] font-bold font-main text-center tracking-[5px]">SOBRE MÍ</h1>
              <div className="relative">
                <img src="src/assets/images/deco.png" alt="decoration2" className="transform translate-x-[412px]" />
              </div>
              <div className="text-[19px] font-main px-10 pt-5 text-justify font-light">
                <p className="mb-2.5">
                  Desde muy joven siempre siempre supe que quería emprender, conseguir mi propio dinero y ser grande,
                  muy grande.
                </p>
                <p className="mb-2.5">
                  Soy partidaria de que las mujeres llegamos a este mundo para triunfar y lograr todo lo que añoramos.
                </p>
                <p className="mb-2.5">Soñar no cuesta, pero no ir detrás de objetivos si.</p>
                <p>Soy mamá, empresaria. Amo aprender, investigar y enseñar.</p>
              </div>
            </div>
            <div className="p-5 h-full">
              <div className="w-[488px] h-full bg-luisa bg-cover"></div>
            </div>
          </div>
        </div> */}
        <div className="h-[1532px] lg:h-[766px] ">
          <div className="mx-5 lg:mx-auto max-w-[1100px] h-full flex max-lg:flex-col">
            <Card button={false} />
            <div className="max-sm:-ml-1 sm:p-5 h-full max-lg:mx-auto">
              <div className="w-[360px] sm:w-[488px] h-full bg-luisa bg-cover bg-center"></div>
            </div>
          </div>
        </div>
        {/* segunda parte */}
        <div className="mx-auto max-w-[1100px] h-full flex max-lg:flex-col max-lg:h-[1132px]">
          <div className="foto-container lg:w-[44%] max-lg:h-[566px] py-1.5 max-lg:order-2">
            <div className="mx-5 mb-5 h-full">
              <div className="h-[466px] sm:h-full bg-luisacc bg-contain bg-no-repeat bg-center "></div>
            </div>
          </div>
          <div className="w-[56%] max-lg:w-full max-lg:px-5 h-[566px] flex items-center max-lg:order-1">
            <div className="w-full text-main text-base sm:text-[19px] p-6 sm:p-12 bg-light-pink rounded-3xl font-light text-justify">
              <p className="mb-2.5">
                El deporte es una de mis pasiones, inspirar y demostrar que todo es posible, solo es cuestión de
                planear, enfocarnos, tener metas y sueños claros. A través de mis redes sociales busco empoderar cada
                vez más no solo a las mujeres, sino que a todos los que quieran iniciar y hacer crecer su
                emprendimiento.
              </p>
              <p>
                Este curso surgió por que a diario recibo mensajes de emprendedores que han tenido malas experiencias
                con influenciadores, que han perdido su dinero y se acercan a mi queriendo saber cómo ha sido todo mi
                proceso y experiencia en cuanto a este tema, debido a que como muchos de ustedes saben a través de mi
                redes sociales comparto con ustedes contenido educativo sobre lo que se de emprendimiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
