import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { faBook, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffectHaveWindow } from "@/utilities";


const checkScrollDiff = (el: HTMLDivElement) => {
    const navbarHeight = el.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return scrollTop > navbarHeight;
};

const Nav = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {

    const [ scrollingDirection, setScrollingDirection ] = useState<"up" | "down">("up");
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isScrollingUp = scrollTop < lastScrollTop;

            setScrollingDirection(isScrollingUp ? "up" : "down");
            lastScrollTop = scrollTop;
        };

        let lastScrollTop = 0;

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`lg:flex justify-between lg:justify-center flex bg-timberwolf border-b-4 border-skobeloff w-full z-10 fixed transition-transform duration-300 ease-in-out top-0 left-0 ${scrollingDirection === "up" ? "transform translate-y-0" : "transform -translate-y-full"}`}
            ref={ref}
        >
            <div className="flex justify-between items-center w-full lg:px-10">
                <div className="text-black p-5 font-bold text-4xl w-1/4">
                    <Link href="/">
                        <div className="flex gap-1">
                            <Image 
                                src="/Emblem-1.svg"
                                alt="Lando"
                                width={33}
                                height={33}
                            />
                            <span>Lando</span>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:flex px-7 w-fit h-full">
                    <div
                        className="flex gap-5"
                    >
                        <Link
                            href="/"
                            className="flex flex-col justify-center px-3 rounded-lg text-black transition ml-auto w-26 text-center cursor-pointer group"
                        >
                            <span className="border border-transparent group-hover:border-black py-1 px-3 rounded  transition-all">Iniciar Aventura</span>
                        </Link>
                        <span
                            className="flex flex-col justify-center px-3 rounded-lg text-black transition ml-auto w-26 text-center cursor-pointer group"
                        >
                            <span className="border border-transparent group-hover:border-black py-1 px-3 rounded  transition-all">Como Comprar</span>
                            <div className="absolute w-screen h-64 bg-white top-[88px] left-0 border invisible group-hover:visible transition-all flex flex-col items-center justify-center gap-5">
                                <div className="flex justify-center items-center gap-10 w-1/2">
                                    <FontAwesomeIcon className="text-8xl" icon={faBook} />
                                    <div className="flex flex-col gap-5">
                                        <h3 className="text-2xl text-left font-bold">Todo tus recursos para aprender:</h3>
                                        <div className="grid grid-cols-2 justify-center items-center w-full h-full gap-5">
                                            <div className="text-left flex flex-col gap-2 hover:underline decoration-do">
                                                <h3 className="text-lg hover:text-bittersweet">Blogs de tips y consejos</h3>
                                            </div>
                                            <div className="text-left flex flex-col gap-2 hover:underline decoration-do">
                                                <h3 className="text-lg hover:text-bittersweet">Simulador Hipotecario</h3>
                                            </div>
                                            <div className="text-left flex flex-col gap-2 hover:underline decoration-do">
                                                <h3 className="text-lg hover:text-bittersweet">Guia de Inversion</h3>
                                            </div>
                                            <div className="text-left flex flex-col gap-2 hover:underline decoration-do">
                                                <h3 className="text-lg hover:text-bittersweet">Lo mas nuevo</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span
                            className="flex flex-col justify-center px-3 rounded-lg text-black transition ml-auto w-26 text-center cursor-pointer group"
                        >
                            <span className="border border-transparent group-hover:border-black py-1 px-3 rounded  transition-all">Quiero Vender</span>
                            <div className="absolute w-screen h-64 bg-white top-[88px] left-0 border invisible group-hover:visible transition-all">
                                <div className="flex justify-center items-center w-full h-full gap-10 p-5">
                                    <div className="border flex justify-center items-center max-w-sm p-5 rounded-md gap-10 group/box">
                                        <FontAwesomeIcon className="text-6xl" icon={faHouse} />
                                        <div className="text-left flex flex-col gap-2">
                                            <h3 className="text-xl font-bold">Lista mi Propiedad</h3>
                                            <p>
                                                Vende tu propiedad de manera fácil y rápida con nuestro servicio de listado. 
                                            </p>
                                            <span className="text-bittersweet group-hover/box:underline decoration-do">Quiero empezar a vender</span>
                                        </div>
                                    </div>
                                    <div className="border flex justify-center items-center max-w-sm gap-10 p-5 rounded-md bg-bittersweet/10 group/box">
                                        <FontAwesomeIcon className="text-6xl" icon={faGear} />
                                        <div className="text-left flex flex-col gap-2">
                                            <h3 className="text-xl font-bold">Quiero el Software</h3>
                                            <p>
                                                Obtén nuestro software de última generación para mejorar la eficiencia de tu negocio. 
                                            </p>
                                            <span className="text-bittersweet group-hover/box:underline decoration-do">Quiero integrar Lando</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <Link
                            href="/"
                            className="flex flex-col justify-center px-3 rounded-lg text-black transition ml-auto w-26 text-center cursor-pointer group"
                        >
                            <span className="border text-white bg-skobeloff group-hover:bg-bittersweet py-1 px-3 rounded transition-all">Iniciar Sesión</span>
                        </Link>
                    </div>
                </div>
                <div className="md:hidden flex flex-col gap-1 mr-5">
                    <span className="block h-1 bg-black w-[25px] rounded-full"></span>
                    <span className="block h-1 bg-black w-[25px] rounded-full"></span>
                    <span className="block h-1 bg-black w-[25px] rounded-full"></span>
                </div>
            </div>
        </nav>

    );
});

Nav.displayName = "Nav";

const Footer = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
    return(
        <footer
            className="bg-skobeloff text-white p-10 flex flex-col gap-5 w-full mt-auto"
            ref={ref}
        >
            <div className="flex flex-col lg:flex-row justify-between gap-5 w-full">
                <div className="w-full flex flex-col justify-between gap-24">
                    <h2 className="text-3xl uppercase font-bold">
                        Deja que tu nuevo <span className="text-bittersweet">hogar</span><br />
                        te encuentre
                    </h2>

                </div>
                <div className="flex flex-col sm:flex-row gap-5 lg:gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold min-w-[150px]">Legal</h3>
                        <a className="hover:text-bittersweet text-sm" href="#">Condiciones</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Privacidad</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Nosotros</a>
                        <a className="hover:text-bittersweet text-sm" href="#">FAQ</a>
                    </div>
                    <div className="flex flex-col gap-1 min-w-[150px]">
                        <h3 className="text-2xl font-bold">Nosotros</h3>
                        <a className="hover:text-bittersweet text-sm" href="#">Blog</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Quienes Somos</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Trabaja en Lando</a>
                    </div>
                    <div className="flex flex-col gap-1 min-w-[150px]">
                        <h3 className="text-2xl font-bold">Enlances Rapidos</h3>
                        <a className="hover:text-bittersweet text-sm" href="#">Simulador de Hipoteca</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Cryptomonedas</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Desarrollos & Brokers</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Developers</a>
                    </div>
                    <div className="flex flex-col gap-1 min-w-[150px]">
                        <h3 className="text-2xl font-bold">Contacto</h3>
                        <a className="hover:text-bittersweet text-sm" href="mailto:team@lando.homes">team@lando.homes</a>
                        <a className="hover:text-bittersweet text-sm" href="#">Whatsapp</a>
                    </div>
                </div>  
            </div>
            <div className="w-full">
                <span className="text-sm">&copy; 2023 Lando S.A de C.V</span>
            </div>
        </footer>
    );
});

Footer.displayName = "Footer";

export function Layout({children} : { children: React.ReactNode }) {
    const nav = useRef<HTMLDivElement>(null);
    const main = useRef<HTMLElement>(null);
    const footer = useRef<HTMLDivElement>(null);

    useEffectHaveWindow(() => {
        if(nav.current && main.current) {
            const navHeight = nav.current.offsetHeight;
            main.current.style.marginTop = `${navHeight}px`;
        }
    }, []);

    useEffectHaveWindow(() => {
        if(footer.current && nav.current &&  main.current) {
            const minHeight = window.innerHeight - footer.current.offsetHeight - nav.current.offsetHeight;
            main.current.style.minHeight = `${minHeight}px`;
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Nav ref={nav} />
            <main
                className="bg-timberwolf flex-grow"
                ref={main}
            >
                { children }
            </main>
            <Footer ref={footer} />
        </div>
    );
}
