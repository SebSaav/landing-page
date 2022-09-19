import { CardPortafolio } from "../components";
import { portafolio } from "../database";

export const PortafolioPage = () => {
  return (
    <>
      <div>
        <div className="items-center text-center mb-20">
          <span className=" bg-skin-500 px-96 py-5 font-mali font-bold text-3xl rounded-xl hover:bg-emerald-500 shadow-lg shadow-skin-400/60 hover:shadow-emerald-400/60">
            Portafolio
          </span>
        </div>

        <div>
          {portafolio.map((portafolio) => (
            <CardPortafolio
              nombre={portafolio.nombre}
              descripcion={portafolio.descripcion}
              stack={portafolio.stack}
              imagen={portafolio.imagen}
              url={portafolio.url}
              github={portafolio.github}
            />
          ))}
        </div>
      </div>
    </>
  );
};
