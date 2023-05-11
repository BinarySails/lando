import Link from "next/link";

function Nav() {
    return (
        <nav className="lg:flex justify-center flex bg-timberwolf border-b-4 border-skobeloff w-full z-10">
            <div className="flex justify-between items-center w-full lg:px-10">
                <div className="text-black p-5 uppercase font-bold text-2xl w-1/4">
                    <Link href="/">
                        NewLands
                    </Link>
                </div>
                <div className="hidden md:flex px-7 w-1/4">
                    <Link 
                        href="/contacto"
                        className="p-3 rounded-lg bg-skobeloff hover:bg-bittersweet text-white transition ml-auto">
                        Contactanos
                    </Link>
                </div>
                <div className="md:hidden flex flex-col gap-1 mr-5">
                    <span className="block h-1 bg-black w-[25px] rounded-full"></span>
                    <span className="block h-1 bg-black w-[25px] rounded-full"></span>
                    <span className="block h-1 bg-black w-[25px] rounded-full"></span>
                </div>
            </div>
        </nav>

    );
}

function Footer() {
    return(
        <footer className="bg-skobeloff text-white p-10 flex flex-col gap-5 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                <div className="w-full flex flex-col justify-between gap-24">
                    <h2 className="text-3xl uppercase font-bold">
                        Es hora de encontrar,<br />
                        tus <span className="text-bittersweet">nuevas tierras</span>.
                    </h2>

                </div>
                <div className="flex flex-col sm:flex-row gap-5 lg:gap-16">
                    <div className="flex flex-col gap-1 w-52">
                        <h3 className="text-2xl font-bold">Legal</h3>
                        <a className="hover:text-bittersweet text-sm" href="#">Condiciones</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Privacidad</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Nosotros</a>
                        <a className="hover:text-bittersweet text-sm" href="#">FAQ</a>
                    </div>
                    <div className="flex flex-col gap-1 w-52">
                        <h3 className="text-2xl font-bold">Contacto</h3>
                        <a className="hover:text-bittersweet text-sm" href="mailto:inmobiliaria@newlands.com.mx">inmobiliaria@newlands.com.mx</a>
                        <a className="hover:text-bittersweet text-sm" href="mailto:ana@newlands.com.mx">ana@newlands.com.mx</a>
                        <a className="hover:text-bittersweet text-sm" href="tel:+524621717984">(462) 171 79 84</a>
                        <a className="hover:text-bittersweet text-sm" href="tel:+5246214903002">(462) 490 30 02</a>
                        <a className="hover:text-bittersweet text-sm" href="tel:+524621896868">(462) 189 68 68</a>
                    </div>
                    <div>
                        <span>Calzada las Villas 830, 36643 Irapuato, Guanajuato</span>
                    </div>
                </div>  
            </div>
            <div className="w-full">
                <span className="text-sm">&copy; 2023 NewLands</span>
            </div>
        </footer>
    );
}

export function Layout({children} : { children: React.ReactNode }) {
    return (
        <div>
            <Nav />
            <main className="bg-timberwolf">
                { children }
            </main>
            <Footer />
        </div>
    );
}
