export const CardEstudios = ({ nombre, entidad, fecha }) => {
  return (
      <div className="m-6 bg-cloudy p-20 rounded-2xl shadow-2xl shadow-cloudy-800/60 border-double border-2 border-emerald-500">
        <h1 className="font-mali font-bold text-lg mb-4">{nombre}</h1>
        <h1 className="font-mali font-semibold text-base mb-2">{entidad}</h1>
        <h1 className="font-mali font-semibold text-base mb-2">{fecha}</h1>
      </div>
  );
};
