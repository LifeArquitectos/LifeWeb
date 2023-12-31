import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-28 lg:pt-24 xl:px-56 xl:pt-32">
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg mb-5 md:mb-7 md:text-xl lg:text-xl xl:text-2xl dark:text-life-green self-start">
            ABOUT US
          </div>

          <div className="text-sm md:text-base text-justify grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
            <div>
              We are Life Architects, an architecture studio specialized in
              architecture, design and municipal procedures services. Aimed at
              any company that wants reliable professionals to obtain its
              design, licenses and execution of a project, whether housing,
              office, retail or health. <br /> <br />
              Life architects means giving vitality to projects and as part of
              the life develop them in the most professional way to generate
              flows reliable and healthy between client and company. <br />
              <br />
              We are reliable professionals with very adaptable capabilities.
              Developed, committed to reaching the objectives.
            </div>
            <div className="italic mt-4 md:mt-0">
              Somos Life Arquitectos, una empresa naciente en servicios de
              arquitectura, diseño y trámites municipales. Orientado a toda
              empresa que desee profesionales confiables para obtener su diseño,
              licencias y ejecución de proyecto ya sea vivienda, oficina, retail
              o salud.
              <br /> <br /> Life arquitectos, significa dar vitalidad a los
              proyectos y como parte de la vida desarrollarlos de la manera más
              profesional para generar flujos confiables y saludables entre
              cliente y empresa.
              <br /> <br />
              Somos profesionales confiables con capacidades de adaptabilidad
              muy desarrolladas, comprometido con llegar a los objetivos.
            </div>
          </div>
          <div className="mt-6 mb-9 grid grid-cols-2 md:gap-8">
            <div className="flex items-end flex-col mr-3 md:mr-8">
              <div className="flex flex-col justify-center items-center">
                <div className="text-xl md:text-2xl xl:text-4xl text-life-green mb-2 md:mb-4">
                  + 06
                </div>
                <div className="text-base md:text-xl xl:text-2xl">
                  Proyectos
                </div>
                <div className="text-base md:text-xl xl:text-2xl">
                  desarrollados
                </div>
              </div>
            </div>
            <div className="flex items-start flex-col ml-3 md:ml-8">
              <div className="flex flex-col justify-center items-center">
                <div className="text-xl md:text-2xl  xl:text-4xl text-life-green mb-2 md:mb-4">
                  + 18,000
                </div>
                <div className="text-base md:text-xl xl:text-2xl">
                  Metros cuadrados
                </div>
                <div className="text-base md:text-xl  xl:text-2xl">
                  desarrollados
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
