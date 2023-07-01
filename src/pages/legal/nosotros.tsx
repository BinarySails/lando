export default function Nosotros() {
    return (
        <main>
            <section className="w-full flex">
                <div className="w-full flex flex-col text-center gap-8 justify-center items-center bg-skobeloff text-white py-32 max-[400px]:p-10">
                    <p className="w-full text-3xl max-[400px]:text-xl min-[400px]:text-5xl font-bold">
                        Sobre nosotros
                    </p>
                    <p>
                        Conoce al equipo detrás de tu página favorita.
                    </p>
                </div>
            </section>
            <section className="w-full flex">
                <div className="w-full flex flex-col h-fit px-24 2xl:px-64 xl:px-48 md:px-24 max-[400px]:p-10 py-32">
                    <div className="w-full flex flex-col justify-start gap-4 text-start self-start">
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 min-[400px]:px-32 font-bold pt-8">
                            ¿Quienes somos?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Somos un equipo de desarrolladores web que busca brindar soluciones digitales a nuestros clientes. Nuestro objetivo es proporcionar un servicio de calidad y satisfacer las necesidades de nuestros clientes.
                            <br/><br/>
                        </p>
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 min-[400px]:px-32 font-bold pt-8">
                            ¿Qué hacemos?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Nos especializamos en el desarrollo de aplicaciones web y móviles, así como en el diseño de páginas web. También ofrecemos servicios de consultoría y asesoría en el campo de la informática.
                            <br/><br/>
                        </p>
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 min-[400px]:px-32 font-bold pt-8">
                            ¿Por qué elegirnos?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Nuestro equipo está formado por profesionales con amplia experiencia en el campo de la informática. Nuestros servicios son de alta calidad y a precios competitivos.
                            <br/><br/>
                        </p>
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 min-[400px]:px-32 font-bold pt-8">
                            ¿Cómo contactarnos?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Puede comunicarse con nosotros a través de nuestro formulario de contacto en línea o llamando a nuestro número de atención al cliente que se encuentra en la sección de contacto de nuestra página.
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}