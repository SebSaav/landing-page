export const CardContacto = ({ imagen, nombre, link, alias }) => {
  return (
    <div className="columns-3 m-8 bg-cloudy rounded-2xl shadow-2xl shadow-cloudy-800/60 border-double border-2 border-emerald-500">
      <img
        src={imagen}
        href={link}
        className="mt-12 ml-6 h-40 rounded-3xl pb-10"
        alt={nombre}
      />
      <div className="items-center flex flex-col place-items-center">
        <h1 className="items-center flex flex-col place-items-center pt-10 font-bold text-3xl font-mali mb-6">
          {nombre}
        </h1>
        <h1 className="items-center flex flex-col place-items-center font-bold text-lg font-mali mb-2">
          {alias}
        </h1>
        <a href={link} target="_blank" className="items-center flex flex-col place-items-center font-black cursor-pointer text-center outline-none hover:bg-emerald-500 active:bg-skin-700 py-2 px-8 mt-4 mr-5 border-2 border-solid rounded-lg shadow-lg">Contactame</a>
      </div>
    </div>
  );
};
