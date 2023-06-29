import { SearchInput } from "@/components/NiceInput";
import { faHeart, faPersonWalking, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Property = {
  price: number,
  properties: Array<{
    title: string,
    value: number
  }>,
  location: string,
  broker: string
};  


const properties = ([] as Array<Property>);

export default function Home() {
  return (
    <main className="bg-timberwolf">
      <Head>
        <title>Lando | Deja que tu casa te encuentre</title>
      </Head>

      <section className="w-full">
        <div className="w-full text-white bg-timberwolf flex gap-4 py-24 px-5 md:p-24 flex-col justify-center items-start bg-[url('/irapuato.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className="text-4xl md:text-6xl uppercase font-bold text-left">
            Encontramos la <br />
            <b className="text-bittersweet"> casa</b> ideal<br />
            juntos
          </h1>
          <div className="flex flex-row gap-5">
            <a href="#" className="hover:text-white border border-bittersweet rounded-md p-1 sm:p-2 text-xs sm:text-sm min-w-[80px] text-center hover:bg-bittersweet transition">Vender</a>
            <a href="#" className="hover:text-white border border-bittersweet rounded-md p-1 sm:p-2 text-xs sm:text-sm min-w-[80px] text-center hover:bg-bittersweet transition">Rentar</a>
            <a href="#" className="hover:text-white border border-bittersweet rounded-md p-1 sm:p-2 text-xs sm:text-sm min-w-[80px] text-center hover:bg-bittersweet transition">Comprar</a>
          </div>
          <div className="relative w-[550px] max-w-full md:p-0">
            <SearchInput disabled />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="px-28 py-16 lg:mx-28 lg:px-0 w-full gap-10 flex flex-col">
          <h2 className="w-full text-center text-3xl font-bold">Nuestros Favoritos</h2>
          <div className="w-full justify-center items-center gap-6">
            { !properties.length && 
              <div className="w-full text-center">
                Aun no hay propiedades
              </div>
            }
            {
              !!properties.length && 
                <Splide
                  options={{
                    rewind: true,
                    gap: "1rem",
                    perPage: 4,
                    breakpoints: {
                      1300: {
                        perPage: 3,
                      },
                      768: {
                        perPage: 2,
                      },
                      640: {
                        perPage: 1
                      }
                    }
                  }}
                  aria-label="My Images"
                  hasTrack={false}
                >
                  <SplideTrack
                    className="w-[92%] ml-auto mr-auto"
                  >
                    
                    {
                      properties
                      .map((it, key) => {
                        return <SplideSlide key={key} className="flex flex-col shadow-lg">  
                          <div className="relative min-h-[200px] bg-[url('/irapuato.jpg')] bg-no-repeat bg-cover bg-center rounded-t" />

                          <div className="bg-white rounded-b">
                            <div className="p-3">
                              <div className="text-2xl border-b mb-3 py-1">
                                <span><b>${it.price.toLocaleString()}</b></span>
                              </div>
                              <div className="flex gap-2 text-sm">
                                {it.properties.map((p, k) => <div key={`${k}-${p.title}`}>
                                  <b>{p.value}</b> {p.title}
                                </div>)}
                              </div>
                              <div className="text-sm text-wenge">
                                <h2>{it.location}</h2>
                              </div>
                              <div className="text-sm text-wenge">
                                <span>{it.broker}</span>
                              </div>
                            </div>

                          </div>
                        </SplideSlide>
                      })
                    }
                  </SplideTrack>
                </Splide>
            }
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col p-10 md:p-5 lg:p-0 py-16 justify-center items-center bg-skobeloff gap-12">
        <h2 className="text-3xl text-white">Porque Lando es mejor que todos</h2>
        <div className="flex flex-col sm:flex-row text-center w-full lg:p-10 gap-10 justify-center">
          <div className="p-10 w-full lg:w-1/5 flex flex-col gap-2 border rounded py-24">
            <FontAwesomeIcon className="text-notwhite text-6xl" icon={faShieldHalved} />
            <h3 className="text-bittersweet text-xl font-bold">Disponibilidad Garantizada</h3>
            <p className="text-white">
              Siempre a tu alcance, nunca te dejaremos sin respuesta.
            </p>
          </div>
          <div className="p-10 w-full lg:w-1/5 flex flex-col gap-2 border rounded py-24">
            <FontAwesomeIcon className="text-notwhite text-6xl" icon={faPersonWalking} />
            <h3 className="text-bittersweet text-xl font-bold">Respaldo por Expertos</h3>
            <p className="text-white">
              Cuenta con nuestro respaldo profesional en cada paso del camino.
            </p>
          </div>
          <div className="p-10 w-full lg:w-1/5 flex flex-col gap-2 border rounded py-24">
            <FontAwesomeIcon className="text-notwhite text-6xl" icon={faHeart} />
            <h3 className="text-bittersweet text-xl font-bold">Asistencia Inmediata</h3>
            <p className="text-white">
              Estamos aquí para ti de inmediato, listos para resolver tus necesidades.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="flex flex-col gap-16 md:gap-0 sm:flex-row items-center text-center w-full h-fit pt-10 sm:p-10">
          <div className="w-4/5 lg:w-3/5 flex flex-col gap-8 justify-center md:items-center">
            <h3 className="text-lg lg:text-3xl">Vive la experiencia Lando</h3>
            <p className="text-3xl lg:text-5xl font-bold w-full md:max-w-[700px]">
              Encuentra la propiedad perfecta con nuestro equipo de expertos en bienes raíces.
            </p>
            <Link 
              className="p-5 rounded-lg bg-skobeloff hover:bg-bittersweet text-white text-lg transition animate-bounce"
              href="#"
            >
              Explorar
            </Link>
          </div>
          <div className="flex flex-col min-h-[300px] relative justify-center lg:p-8 text-white">
            <Image src="/gente.jpg" alt="" width={500} height={800} />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-bittersweet text-skobeloff">
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            interval: 3500,
            speed: 1000,
            gap: "1rem",
            perPage: 1,
          }}
          aria-label="Nustras historias"
          className="w-full h-auto flex justify-center items-center"
        >
          <SplideSlide className="flex justify-center">
            <div className="max-w-lg h-full flex flex-col justify-center items-center p-16 gap-5">
              <Image src="/sponsors/codelaunch.png" alt="" width={200} height={200} />
            </div>
          </SplideSlide>
        </Splide>
      </section>

    </main>
  );
}
