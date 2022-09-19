import profile from "../../assets/Profile.png";

export const InicioPage = () => {
  return (
    <>
      <div>
        <div className="items-center text-center mb-15">
          <span className=" bg-skin-500 px-96 py-5 font-mali font-bold text-3xl rounded-xl hover:bg-emerald-500 shadow-lg shadow-skin-400/60 hover:shadow-emerald-400/60">
            Inicio
          </span>
        </div>

        <div className="items-center flex flex-left">
          <img
            className="rounded-full bg-cover bg-center ml-10 h-96 mt-40"
            src={profile}
            alt=""
          />
        </div>

        <div className="items-center flex flex-col place-items-center -mt-80 space-y-15">
          <h1 className="font-mali font-black text-6xl -mt-28 mb-60">
            Curriculum Vitae
          </h1>
          <p className="font-mali font-black text-3xl mb-10">
            Juan Sebastián Saavedra Wilches
          </p>
        </div>
        <p className="items-center flex flex-col place-items-center font-mali font-black text-2xl mt-60">
          Bogotá, Colombia 2022
        </p>
      </div>

    </>
  );
};
