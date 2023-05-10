import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {

  return (
    <main className='bg-salmon'>
      <Head>
        <title>Lando</title>
      </Head>

      <nav className="lg:flex justify-center bg-transparent fixed w-screen z-10">
        <div className="flex justify-between bg-salmon items-center border-b md:border w-full lg:w-4/5 lg:mt-10">
          <div className="bg-black text-white p-5 uppercase font-bold text-lg">
            Lando
          </div>
          <div className="hidden md:flex justify-evenly gap-10 px-7">
            <a href="#" className="py-5 hover:text-orange">Vender</a>
            <a href="#" className="py-5 hover:text-orange">Comprar</a>
            <a href="#" className="py-5 hover:text-orange">Rentar</a>
          </div>
          <div className="md:hidden flex flex-col gap-1 mr-5">
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
            <span className="block h-1 bg-black w-[25px] rounded-full"></span>
          </div>
        </div>
      </nav>

      <section className="w-full">
        <div className="w-full bg-salmon flex flex-col gap-16 justify-center items-center h-screen pt-16 lg:py-16 bg-[url('/mexico-city-151380.svg')] bg-no-repeat bg-contain bg-bottom">
          <h1 className="text-6xl uppercase font-bold text-center">
            Encuentra tu<br />
            <b className="text-orange">espacio</b><br />
            ideal.
          </h1>
          <div className="relative w-[550px] h-[200px] max-w-full p-5 lg:p-0">
            <div className="flex gap-2 bg-white border-2 border-orange rounded-lg p-5">
              <FontAwesomeIcon icon={faSearch} className="pt-1" />
              <input className="w-full outline-transparent focus:outline-none" type="text" placeholder="Buscar" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="py-16 lg:p-16 flex flex-col p-5 lg:flex-row justify-center items-center gap-20">
          {
            [
              {
                title: "Compra una Casa",
                sub: "Buscar Casas"
              },
              {
                title: "Vende una Casa",
                sub: "Ver tus opciones"
              },
              {
                title: "Renta una Casa",
                sub: "Encuentra Rentadores"
              }
            ]
              .map(({ title, sub }, key) =>
                <div key={key} className="flex flex-col justify-center items-center gap-5 w-full mx-5 lg:w-1/4 shadow-lg rounded-lg p-16 transform hover:scale-110 transition cursor-pointer">
                  <Image src="/buy-a-home.png" alt="a home" width={250} height={250} />
                  <h3 className="font-bold text-2xl">{title}</h3>
                  <p>
                    Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
                  </p>
                  <button className="border-orange border-2 p-2 rounded-lg">
                    {sub}
                  </button>
                </div>
              )
          }
        </div>
      </section>

      <footer className="bg-black text-white p-10 flex flex-col gap-5 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
          <div className="w-full flex flex-col justify-between gap-24">
            <h2 className="text-2xl uppercase font-bold">Detras de toda casa<br />siempre hay un gran <span className="text-[#ffa500]">dueño</span>.</h2>
          </div>
          <div className="flex flex-col gap-1 w-52">
            <a className="hover:text-orange" href="#">Terms & Conditions</a>
            <a className="hover:text-orange" href="#">Privacy Policy</a>
            <a className="hover:text-orange" href="#">FAQ</a>
          </div>
        </div>
        <div className="w-full">
          <span className="text-sm">&copy; 2023 Lando</span>
        </div>
      </footer>

    </main>
  );
}
