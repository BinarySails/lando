import { SearchInput } from "@/components/NiceInput";
export default function Faq() {
    return (
        <main>
            <section className="w-full flex">
                <div className="w-full flex flex-col text-center gap-8 justify-center items-center bg-skobeloff text-white py-32 max-[400px]:p-10">
                    <p className="w-full text-3xl max-[400px]:text-xl min-[400px]:text-5xl font-bold">
                        Preguntas frecuentes
                    </p>
                    <p className="max-[400px]:text-sm min-[400px]:px-10">
                        Consulta las preguntas mas frecuentes de nuestros usuarios.
                    </p>
                </div>
            </section>
            <section className="w-full flex">
                <div className="w-full flex flex-col h-fit px-24 2xl:px-64 xl:px-48 md:px-24 min-[400px]:px-10 max-[400px]:p-10 py-32">
                    <div className="w-full flex flex-col justify-start gap-8 text-start self-start">
                        <p className="text-2xl text-center max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 font-bold pt-8">
                            Busca tu pregunta
                        </p>
                        <SearchInput disabled />
                    </div>
                </div>
            </section>
            <section className="w-full flex">
                <div className="w-full flex flex-col h-fit px-24 2xl:px-64 xl:px-48 md:px-24 min-[400px]:px-10 max-[400px]:p-10 py-32">
                    <div className="w-full flex flex-col justify-start gap-4 text-start self-start">
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 font-bold pt-8">
                            ¿Que hacemos?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Nuestra página tiene como objetivo proporcionar información detallada sobre nuestros productos y servicios, así como brindar recursos útiles relacionados con nuestro campo de especialización.
                            <br/><br/>
                        </p>
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 font-bold pt-8">
                            ¿Cómo puedo ponerme en contacto con el equipo de atención al cliente?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Puede comunicarse con nuestro equipo de atención al cliente a través de nuestro formulario de contacto en línea o llamando a nuestro número de atención al cliente que se encuentra en la sección de contacto de nuestra página.
                            <br/><br/>
                        </p>
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 font-bold pt-8">
                            ¿Cuáles son los métodos de pago aceptados en esta página?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito/débito principales, transferencias bancarias y servicios de pago en línea populares como PayPal.
                            <br/><br/>
                        </p>
                        <p className="text-2xl max-[400px]:text-xl min-[400px]:text-3xl max-[400px]:pt-4 font-bold pt-8">
                            ¿Cuál es el plazo de entrega de los productos comprados en esta página?
                        </p>
                        <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                            El plazo de entrega varía según su ubicación y el producto en particular. Generalmente, los envíos dentro del país suelen tardar de 3 a 5 días hábiles, mientras que los envíos internacionales pueden demorar de 7 a 14 días hábiles.
                            <br/><br/>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}