import { CardContacto } from ".././components/CardContacto";
import { contacto } from "../database/contacto";

export const ContactoPage = () => {
  return (
    <>
      <div>
        <div className="items-center text-center mb-20">
          <span className=" bg-skin-500 px-96 py-5 font-mali font-bold text-3xl rounded-xl hover:bg-emerald-500 shadow-lg shadow-skin-400/60 hover:shadow-emerald-400/60">
            Contacto
          </span>
        </div>

        <div>
          {contacto.map((contacto) => (
            <CardContacto
              imagen={contacto.imagen}
              nombre={contacto.nombre}
              alias={contacto.alias}
              link={contacto.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
