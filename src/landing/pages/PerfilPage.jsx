import profile from "../../assets/Profile.png";
import java from "../../assets/Java.png";
import python from "../../assets/Python.png";
import javascript from "../../assets/JavaScript.png";

export const PerfilPage = () => {
  return (
    <>
      <div>
        <div className="items-center text-center mb-15">
          <span className=" bg-skin-500 px-96 py-5 font-mali font-bold text-3xl rounded-xl hover:bg-emerald-500 shadow-lg shadow-skin-400/60 hover:shadow-emerald-400/60">
            Perfil
          </span>
        </div>

        <div className="items-center flex flex-center mt-10">
          <img
            className="rounded-full bg-cover bg-center ml-14 h-96 "
            src={profile}
            alt=""
          />
        </div>

        <div className="items-end flex flex-col place-items-center -mt-80 space-y-5">
          <div className=" bg-skin font-mali font-black text-base mt-15 items-end mr-14 mb-2 p-4 border-4 border-emerald-500">
            <p className="flex flex-center mb-3">
              Nombre Completo:
              <span className="font-normal">
                &nbsp;Juan Sebastián Saavedra Wilches
              </span>
            </p>
            <p className="flex flex-center mb-3">
              Documento de Identidad:
              <span className="font-normal">&nbsp;1.034.399.380</span>
            </p>
            <p className="flex flex-center mb-3">
              Fecha de Nacimiento:
              <span className="font-normal">&nbsp;30/11/2005</span>
            </p>
            <p className="flex flex-center mb-3">
              Lugar de Nacimiento:
              <span className="font-normal">&nbsp;Bogotá. Colombia</span>
            </p>
            <p className="flex flex-center mb-3">
              Ciudad:<span className="font-normal">&nbsp;Bogotá</span>
            </p>
            <p className="flex flex-center mb-3">
              Telefono:
              <span className="font-normal">&nbsp;+57 320 9304557</span>
            </p>
            <p className="flex flex-center">
              Email:
              <span className="font-normal">
                &nbsp;sebitaswilches@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="text-center items-center flex flex-col place-items-center -mt-80 mb-20 space-y-10">
          <p className="text-center space-y-10">
            Actualmente estudio en la{" "}
            <span className="font-semibold">
              Universidad Nacional de Colombia
            </span>
            , en la <br />
            <span className="font-semibold">
              Fundación Internacional Maria Luisa de Moreno
            </span>{" "}
            y en la{" "}
            <span className="font-semibold">
              Academia de
              <br />
              Idiomas Smart
            </span>
            .
          </p>
          <p className="text-center space-y-10">
            Mi tiempo libre lo dedico a la lectura o a estudiar, intento ser muy
            <br />
            proactivo, tiendo a mirar mucho material documentativo en internet.
            <br />
          </p>
          <p className="text-center space-y-10">
            Soy un Software Developer en proceso, con conocimientos basicos y
            <br />
            medios en:
          </p>
          <p className="text-center space-y-10">
            JavaScript, Python, Java, CSS, HTML, Django, ReactJS, Vue y MySQL,<br />
            los cuales he aprendido a lo largo de mis estudios y del<br />
            autoaprendizaje que realizo casi a diario, intento siempre buscar<br />
            alternativas para los problemas que se presentan en el día a día.
          </p>
        </div>

        <div className="columns-3 block -mt-10">
          <div className="items-center flex flex-col place-items-center">
            <img src={javascript} className="h-60 rounded-3xl" />
            <p className=" text-2xl mt-4 font-mali font-black">JavaScript</p>
          </div>
          <div className="row items-center flex flex-col place-items-center">
            <img src={python} className="h-60 rounded-3xl" />
            <p className=" text-2xl mt-4 font-mali font-black">Python</p>
          </div>
          <div className="row items-center flex flex-col place-items-center">
            <img src={java} className="h-60 rounded-3xl" />
            <p className=" text-2xl mt-4 font-mali font-black">Java</p>
          </div>
        </div>
      </div>
    </>
  );
};
