export const CardPortafolio = ({
  nombre,
  descripcion,
  stack,
  imagen,
  url,
  github,
}) => {
  return (
    <div className="items-center flex flex-col place-items-center m-6 bg-cloudy px-20 py-16 rounded-2xl shadow-2xl shadow-cloudy-800/60 border-double border-2 border-emerald-500">
      <h1 className="font-bold font-mali text-xl text-center mb-10">
        {nombre}
      </h1>
      <h1 className="font-quicksand font-medium text-center mb-10">
        {descripcion}
      </h1>
      <h1 className="items-center place-items-centerinline-block bg-cloudy-600 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 ml-4 mb-5">
        {stack}
      </h1>
      <img className="h-80 rounded-3xl mb-10" src={imagen} alt={nombre} />
      <div className="">
        <a
          href={url}
          target="_blank"
          className="font-black cursor-pointer text-center outline-none hover:bg-emerald-500 active:bg-skin-700 py-2 px-8 mt-4 mr-5 border-2 border-solid rounded-lg shadow-lg "
        >
          Vista Previa
        </a>
        <a
          href={github}
          target="_blank"
          className="font-black cursor-pointer text-center outline-none hover:bg-emerald-500 active:bg-skin-700 py-2 px-8 mt-4 border-2 border-solid rounded-lg shadow-lg "
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
