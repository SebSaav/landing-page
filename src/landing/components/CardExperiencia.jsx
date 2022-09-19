export const CardExperiencia = ({ nombre, descripcion, fecha }) => {
  return (
    <div className="m-6 bg-cloudy px-20 py-16 rounded-2xl shadow-2xl shadow-cloudy-800/60 border-double border-2 border-emerald-500">
      <h1 className="font-bold font-mali text-xl text-center mb-10">{nombre}</h1>
      <h1 className="font-quicksand font-medium text-center mb-10">{descripcion}</h1>
      <h1 className="font-normal font-quicksand text-center">{fecha}</h1>
    </div>
  );
};
