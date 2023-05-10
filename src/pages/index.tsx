import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {

  return (
    <main className='bg-timberwolf'>
      <Head>
        <title>Lando</title>
      </Head>

      <nav className="lg:flex justify-center flex bg-timberwolf border-b-2 border-skobeloff w-full z-10">
        <div className="flex justify-between items-center w-full lg:px-10">
          <div className="text-black p-5 uppercase font-bold text-2xl w-1/4">
            New Lands
          </div>
          <div className="hidden md:flex justify-evenly gap-10 px-7 w-1/4">
            <a href="#" className="p-3 rounded-lg bg-skobeloff hover:bg-transparent hover:border-2 hover:border-skobeloff hover:text-black text-white transition">Contactanos</a>
          </div>
          <div className="md:hidden flex flex-col gap-1 mr-5">
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
          </div>
        </div>
      </nav>

      <section className="w-full">
        <div className="w-full text-white bg-timberwolf flex gap-4 p-24 flex-col justify-center items-start bg-[url('/irapuato.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className="md:text-6xl uppercase font-bold text-left">
            Encuentra tu<br />
            <b className="text-skobeloff">espacio</b><br />
            ideal.
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <a href="#" className="hover:text-white border border-skobeloff rounded-md p-2 text-sm min-w-[80px] text-center hover:bg-skobeloff transition">Vender</a>
            <a href="#" className="hover:text-white border border-skobeloff rounded-md p-2 text-sm min-w-[80px] text-center hover:bg-skobeloff transition">Rentar</a>
            <a href="#" className="hover:text-white border border-skobeloff rounded-md p-2 text-sm min-w-[80px] text-center hover:bg-skobeloff transition">Comprar</a>
          </div>
          <div className="relative w-[550px] max-w-full p-5 lg:p-0">
            <div className="flex text-black gap-2 bg-white border-2 border-skobeloff rounded-lg p-5">
              <FontAwesomeIcon icon={faSearch} className="pt-1" />
              <input className="w-full outline-transparent focus:outline-none" type="text" placeholder="Buscar" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center bg-timberwolf">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row py-24 lg:flex-row justify-center items-center gap-6 mx-5 lg:mx-28">
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
              return <div key={key} className="flex flex-col shadow-lg">
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

              </div>
            })
          }
        </div>
      </section>

      <footer className="bg-skobeloff text-white p-10 flex flex-col gap-5 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
          <div className="w-full flex flex-col justify-between gap-24">
            <h2 className="text-3xl uppercase font-bold">Detras de toda casa<br />siempre hay un gran <span className="text-bittersweet">dueño</span>.</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex flex-col gap-1 w-52">
              <h3 className="text-2xl font-bold">Contacto</h3>
              <a className="hover:text-bittersweet text-sm" href="#">inmobiliaria@newlands.com.mx</a>
              <a className="hover:text-bittersweet text-sm" href="#">ana@newlands.com.mx</a>
              <a className="hover:text-bittersweet text-sm" href="#">(462) 171 79 84</a>
              <a className="hover:text-bittersweet text-sm" href="#">(462) 490 30 02</a>
              <a className="hover:text-bittersweet text-sm" href="#">(462) 189 68 68</a>
            </div>
            <div className="flex flex-col gap-1 w-52">
              <h3 className="text-2xl font-bold">Legal</h3>
              <a className="hover:text-bittersweet text-sm" href="#">Condiciones</a>
              <a className="hover:text-bittersweet text-sm" href="#">Privacidad</a>
              <a className="hover:text-bittersweet text-sm" href="#">Nosotros</a>
              <a className="hover:text-bittersweet text-sm" href="#">FAQ</a>
            </div>
          </div>  
        </div>
        <div className="w-full">
          <span className="text-sm">&copy; 2023 NewLands</span>
        </div>
      </footer>

    </main>
  );
}
