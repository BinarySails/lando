import { SearchInput } from '@/components/NiceInput';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-timberwolf'>
      <Head>
        <title>Lando</title>
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
            <SearchInput />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="w-full justify-center items-center gap-6 px-10 py-16 lg:mx-28 lg:px-0">
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
          >
            {
              [
                {
                  price: 100000000,
                  properties: [{
                    title: "bds",
                    value: 3
                  }, {
                      title: "ba",
                      value: 4
                    }, {
                      title: "m2",
                      value: 134
                    }],
                  location: "Los Angeles, California, Estados Unidos",
                  broker: "NEW LANDS Broker"
                },
                {
                  price: 200000000,
                  properties: [{
                    title: "bds",
                    value: 5
                  }, {
                      title: "ba",
                      value: 2
                    }, {
                      title: "m2",
                      value: 134
                    }],
                  location: "Queretaro, Quretaro, Mexico",
                  broker: "NEW LANDS Broker"
                },
                {
                  price: 200000000,
                  properties: [{
                    title: "bds",
                    value: 5
                  }, {
                      title: "ba",
                      value: 2
                    }, {
                      title: "m2",
                      value: 134
                    }],
                  location: "Queretaro, Quretaro, Mexico",
                  broker: "NEW LANDS Broker"
                },
                {
                  price: 200000000,
                  properties: [{
                    title: "bds",
                    value: 5
                  }, {
                      title: "ba",
                      value: 2
                    }, {
                      title: "m2",
                      value: 134
                    }],
                  location: "Queretaro, Quretaro, Mexico",
                  broker: "NEW LANDS Broker"
                }


              ]
              .map((it, key) => {
                return <SplideSlide key={key} className="flex flex-col shadow-lg">  
                  <div className="relative w-full min-h-[200px] bg-[url('/irapuato.jpg')] bg-no-repeat bg-cover bg-center rounded-t" />

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
          </Splide>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-skobeloff">
        <div className="flex flex-col sm:flex-row text-center w-full lg:p-10">
          <div className="w-full lg:w-4/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933.180709921237!2d-101.382532!3d20.680852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7faf03b89537%3A0xdf8e31791c3930c6!2sNewlands%20Inmobiliaria%20y%20Servicios!5e0!3m2!1sen!2smx!4v1683762660158!5m2!1sen!2smx" 
              height="450"
              className="w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center py-32 px-5 md:p-8 text-white">
            <h3 className="text-xl">Direccion</h3>
            <span className="text-3xl ">Calzada las Villas 830, 36643 Irapuato, Guanajuato</span>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="flex flex-col gap-16 md:gap-0 sm:flex-row items-center text-center w-full h-fit pt-10 sm:p-10">
          <div className="w-4/5 lg:w-3/5 flex flex-col gap-8 justify-center md:items-center">
            <h3 className="text-lg lg:text-3xl">Vive la experiencia NewLands</h3>
            <p className="text-3xl lg:text-5xl font-bold w-full md:max-w-[700px]">
              Encuentra la propiedad perfecta con nuestro equipo de expertos en bienes raíces.
            </p>
            <Link 
              className="p-5 rounded-lg bg-skobeloff hover:bg-bittersweet text-white text-lg transition animate-bounce"
              href="/contacto"
            >
              Preguntanos
            </Link>
          </div>
          <div className="flex flex-col min-h-[300px] relative justify-center lg:p-8 text-white">
            <Image src="/gente.jpg" alt="" width={500} height={800} />
          </div>
        </div>
      </section>

    </main>
  );
}
