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
        <div className="w-full text-white bg-timberwolf flex gap-4 p-24 flex-col justify-center items-start bg-[url('/irapuato.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className="md:text-6xl uppercase font-bold text-left">
            Encontramos la <br />
            <b className="text-bittersweet"> casa</b> ideal<br />
            juntos
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <a href="#" className="hover:text-white border border-skobeloff rounded-md p-2 text-sm min-w-[80px] text-center hover:bg-skobeloff transition">Vender</a>
            <a href="#" className="hover:text-white border border-skobeloff rounded-md p-2 text-sm min-w-[80px] text-center hover:bg-skobeloff transition">Rentar</a>
            <a href="#" className="hover:text-white border border-skobeloff rounded-md p-2 text-sm min-w-[80px] text-center hover:bg-skobeloff transition">Comprar</a>
          </div>
          <div className="relative w-[550px] max-w-full p-5 lg:p-0">
            <SearchInput />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="w-full justify-center items-center gap-6 mx-5 py-16 lg:mx-28">
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
              perPage: 4,
              autoplay: true,
              interval: 300
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
        <div className="flex text-center w-full p-10">
          <div className="w-4/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7242689840796!2d-101.38503242394057!3d20.68079388088284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7fa5dc564b2d%3A0x846a5c5526daaaa!2sSoriana%20S%C3%BAper%20-%20Cibeles!5e0!3m2!1sen!2smx!4v1683751890420!5m2!1sen!2smx" 
              height="450"
              className="w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-col justify-center p-8 text-white">
            <h3 className="text-xl">Direccion</h3>
            <span className="text-3xl ">Calzada las Villas 830, 36643 Irapuato, Guanajuato</span>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="flex text-center w-full h-fit p-10">
          <div className="w-3/5 flex flex-col gap-8 justify-center items-center">
            <h3 className="text-3xl">Vive la experiencia NewLands</h3>
            <p className="text-5xl font-bold max-w-[700px]">
              Encuentra la propiedad perfecta con nuestro equipo de expertos en bienes raíces.
            </p>
            <Link 
              className="p-5 rounded-lg bg-skobeloff hover:bg-bittersweet text-white text-lg transition"
              href="/contacto"
            >
              Preguntanos
            </Link>
          </div>
          <div className="flex flex-col min-h-[300px] relative justify-center p-8 text-white">
            <Image src="/gente.jpg" alt="" width={500} height={800} />
          </div>
        </div>
      </section>

    </main>
  );
}
