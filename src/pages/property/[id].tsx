import { SearchInput } from "@/components/NiceInput";
import { faBookmark, faBuilding, faCalendar, faCar, faCaretLeft, faCaretRight, faHammer, faHeart, faHouse, faLeftLong, faMoneyBill, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Property() {

  const images = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/80e077fa-8985-483e-9946-8c088fbd8e78.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/279e191e-784b-405f-9cfd-7ed9ce4010cf.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/a1cf4c19-a156-439d-bb5c-8d0e13544ed0.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/45b4ce4b-6bc9-4f19-af4b-811e6d2d8ef1.jpeg?im_w=720"
  ];

  const amenities = [
    {
      icon: faHouse,
      title: "Casa",
      tag: "Tipo de Propiedad"
    },
    {
      icon: faRuler,
      title: "968 mt2",
      tag: "Terreno"
    },
    {
      icon: faRuler,
      title: "400 mt2",
      tag: "Construccion"
    },
    {
      icon: faHammer,
      title: "2019",
      tag: "Year Built"
    },
  ];

  return (
    <section className="w-full flex justify-center">
      <div className="w-[1280px] pt-10">
        <div className="py-3">
          <h1 className="text-3xl font-bold">Habitación doble en hermoso departamento</h1>
          <div className="flex justify-between w-full">
            <p className="text-sm">3 Cheshire Glen Ct, The Woodlands, TX 77382</p>
            <div className="flex gap-5">
              <a className="text-sm hover:underline" href="#"><FontAwesomeIcon icon={faHeart} /> Compartir</a>
              <a className="text-sm hover:underline" href="#"><FontAwesomeIcon icon={faBookmark} /> Guardar</a>
            </div>
          </div>
        </div>
        <div className="flex h-[500px] gap-3">
          <div className="w-1/2 relative">
            <Image src={images[0]} fill alt="image" />
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-3">
            {
              images
              .filter((_, index) => index > 0)
              .map((image, index) => <div key={index} className="w-full relative">
                <Image src={image} fill alt="image" />
              </div>)
            }
          </div>
        </div>
        <div className="py-5 flex justify-between gap-10">
          <div className="w-8/12">
            <h5 className="text-lg"><FontAwesomeIcon icon={faMoneyBill} />{" "}For Sale</h5>
            <h4 className="text-3xl font-bold">$430,000</h4>
            <div className="flex gap-3 mt-5">
              {
                amenities.map((it, index) => 
                  <div
                    key={`${it.tag}-${index}`}
                    className="flex gap-2 items-center border border-black rounded p-2 w-40"
                  >
                    <div className="text-xl"><FontAwesomeIcon icon={it.icon} /></div>
                    <div className="flex flex-col">
                      <div className="text-xs">{it.tag}</div>
                      <div className="text-md">{it.title}</div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="py-10">
              <h4 className="text-2xl font-bold">Descripción</h4>
              <p>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Caracteristicas</h4>

            </div>
          </div>
          <div className="flex flex-col gap-5 w-4/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d933.180709921237!2d-101.382532!3d20.680852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c7faf03b89537%3A0xdf8e31791c3930c6!2sNewlands%20Inmobiliaria%20y%20Servicios!5e0!3m2!1sen!2smx!4v1683762660158!5m2!1sen!2smx" 
              height="150"
              className="w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="bg-white p-5 flex flex-col gap-4">
              <h5 className="text-2xl font-bold">Toma un Tour</h5>
              <span>Selecciona el horario que mas te guste</span>
              <div className="flex justify-center items-center gap-5">
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col justify-center items-center border border-skobeloff p-5 rounded">
                    <h6>Mar</h6>
                    <h6>May 15</h6>
                  </div>
                  <div className="flex flex-col justify-center items-center border border-skobeloff p-5 rounded">
                    <h6>Mie</h6>
                    <h6>May 16</h6>
                  </div>
                  <div className="flex flex-col justify-center items-center border border-skobeloff p-5 rounded">
                    <h6>Jue</h6>
                    <h6>May 17</h6>
                  </div>
                </div>
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faCaretRight} />
                </div>
              </div>
              <div>
                <select className="bg-timberwolf rounded-lg p-2 outline-transparent focus:outline-none flex-1 w-full">
                  {
                    ["11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "2:00 pm"].map((it, key) => {
                      return <option key={`${it}-${key}`}>
                        {it}
                      </option>
                    })
                  }
                </select>
              </div>
              <div>
                <button className="bg-skobeloff text-white rounded-lg p-2 outline-transparent focus:outline-none flex-1 w-full">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
