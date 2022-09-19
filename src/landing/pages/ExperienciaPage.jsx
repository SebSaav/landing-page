import { CardExperiencia } from "../components";
import { experiencia } from "../database";

export const ExperienciaPage = () => {
  return (
    <>
      <>
        <div>
          <div className="items-center text-center mb-20">
            <span className=" bg-skin-500 px-96 py-5 font-mali font-bold text-3xl rounded-xl hover:bg-emerald-500 shadow-lg shadow-skin-400/60 hover:shadow-emerald-400/60">
              Experiencia
            </span>
          </div>

          <div className="items-center flex flex-col place-items-center">
            {experiencia.map((experiencia) => (
              <CardExperiencia
                nombre={experiencia.nombre}
                descripcion={experiencia.descripcion}
                fecha={experiencia.fecha}
              />
            ))}
          </div>
        </div>
      </>
    </>
  );
};
