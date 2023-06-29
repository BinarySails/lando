import { SearchInput } from "@/components/NiceInput";
export default function Faq() {
    return (
        <main>
            <section>
                <div className="flex flex-col text-center gap-8 justify-center items-center bg-skobeloff text-white py-32">
                    <p className="text-3xl lg:text-5xl font-bold w-full md:max-w-[700px] ">
                        Preguntas frecuentes
                    </p>
                    <p>
                        Consulta las preguntas mas frecuentes de nuestros usuarios.
                    </p>
                </div>
            </section>
            <section className="w-full flex">
                <div className="flex flex-col w-full h-fit px-[512px] py-32">
                    <div className="flex flex-col w-full justify-start gap-8 text-start self-start sm:pt-10">
                        <p className="text-2xl lg:text-3xl text-center font-bold w-full pt-8">
                            Busca tu pregunta
                        </p>
                        <SearchInput disabled />
                    </div>
                </div>
            </section>
            <section className="w-full flex">
                <div className="flex flex-col w-full h-fit px-[512px] pb-32">
                    <div className="flex flex-col w-full justify-start gap-8 text-start self-start sm:pt-10">
                        <p className="text-xl lg:text-2xl w-full font-bold">
                            ¿Que hacemos?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Nuestra página tiene como objetivo proporcionar información detallada sobre nuestros productos y servicios, así como brindar recursos útiles relacionados con nuestro campo de especialización.
                            <br/><br/>
                        </p>
                        <p className="text-xl lg:text-2xl w-full font-bold">
                            ¿Cómo puedo ponerme en contacto con el equipo de atención al cliente?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Puede comunicarse con nuestro equipo de atención al cliente a través de nuestro formulario de contacto en línea o llamando a nuestro número de atención al cliente que se encuentra en la sección de contacto de nuestra página.
                            <br/><br/>
                        </p>
                        <p className="text-xl lg:text-2xl w-full font-bold">
                            ¿Cuáles son los métodos de pago aceptados en esta página?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito/débito principales, transferencias bancarias y servicios de pago en línea populares como PayPal.
                            <br/><br/>
                        </p>
                        <p className="text-xl lg:text-2xl w-full font-bold">
                            ¿Cuál es el plazo de entrega de los productos comprados en esta página?
                        </p>
                        <p className="text-xl lg:text-2xl w-full">
                            El plazo de entrega varía según su ubicación y el producto en particular. Generalmente, los envíos dentro del país suelen tardar de 3 a 5 días hábiles, mientras que los envíos internacionales pueden demorar de 7 a 14 días hábiles.
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}