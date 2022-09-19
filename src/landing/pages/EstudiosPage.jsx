import unal from "../../assets/Unal.png";
import fimlm from "../../assets/Fimlm.png";
import smart from "../../assets/Smart.png";
import { CardEstudios } from "../components";
import { estudios } from "../database";

export const EstudiosPage = () => {
  return (
    <>
      <div>
        <div className="items-center text-center mb-20">
          <span className=" bg-skin-500 px-96 py-5 font-mali font-bold text-3xl rounded-xl hover:bg-emerald-500 shadow-lg shadow-skin-400/60 hover:shadow-emerald-400/60">
            Estudios
          </span>
        </div>

        <div className="columns-3 block mt-20 mb-20">
          <div className="items-center flex flex-col place-items-center">
            <img src={unal} className="h-48 rounded-3xl" />
          </div>
          <div className="row items-center flex flex-col place-items-center">
            <img src={fimlm} className="h-48 rounded-3xl " />
          </div>
          <div className="row items-center flex flex-col place-items-center">
            <img src={smart} className="h-48 rounded-3xl" />
          </div>
        </div>

        <section>
          {estudios.map((estudios) => (
            <CardEstudios
              nombre={estudios.nombre}
              entidad={estudios.entidad}
              fecha={estudios.fecha}
            />
          ))}
        </section>

      </div>
    </>
  );
};
