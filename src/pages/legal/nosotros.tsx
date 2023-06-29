export default function Nosotros() {
    return (
        <main>
            <section>
                <div className="flex flex-col text-center gap-8 justify-center items-center bg-skobeloff text-white py-32">
                    <p className="text-3xl lg:text-5xl font-bold w-full md:max-w-[700px] ">
                        Sobre nosotros
                    </p>
                    <p>
                        Conoce al equipo detrás de tu página favorita.
                    </p>
                </div>
            </section>
            <section className="w-full flex">
                <div className="flex flex-col w-full h-fit px-[512px] py-32">
                    <div className="flex flex-col justify-start gap-8 text-start self-start sm:pt-10">
                        <p className="text-2xl lg:text-3xl font-bold w-full pt-8">
                            ¿Quienes somos?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Somos un equipo de desarrolladores web que busca brindar soluciones digitales a nuestros clientes. Nuestro objetivo es proporcionar un servicio de calidad y satisfacer las necesidades de nuestros clientes.
                            <br/><br/>
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold w-full pt-8">
                            ¿Qué hacemos?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Nos especializamos en el desarrollo de aplicaciones web y móviles, así como en el diseño de páginas web. También ofrecemos servicios de consultoría y asesoría en el campo de la informática.
                            <br/><br/>
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold w-full pt-8">
                            ¿Por qué elegirnos?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Nuestro equipo está formado por profesionales con amplia experiencia en el campo de la informática. Nuestros servicios son de alta calidad y a precios competitivos.
                            <br/><br/>
                        </p>
                        <p className="text-2xl lg:text-3xl font-bold w-full pt-8">
                            ¿Cómo contactarnos?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Puede comunicarse con nosotros a través de nuestro formulario de contacto en línea o llamando a nuestro número de atención al cliente que se encuentra en la sección de contacto de nuestra página.
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}