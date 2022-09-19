import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-emerald-500 overflow-hidden font-mali mb-10">
      <div className="px-20">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div>
              <div className="float-right flex space-x-40">
                <div className="border-skin-500">
                  <NavLink
                    className={({ isActive }) =>
                      `float-right uppercase text-white block px-5 rounded-md text-lg font-semibold ${
                        isActive
                          ? "border-4 border-b-4 border-t-0 border-r-0 border-l-0 border-skin-500"
                          : ""
                      }`
                    }
                    to="/inicio"
                  >
                    Inicio
                  </NavLink>
                </div>

                <div className="border-skin-500">
                  <NavLink
                    className={({ isActive }) =>
                      `float-right uppercase text-white px-5 rounded-md text-lg font-semibold ${
                        isActive
                          ? "border-4 border-b-4 border-t-0 border-r-0 border-l-0 border-skin-500"
                          : ""
                      }`
                    }
                    to="/perfil"
                  >
                    Perfil
                  </NavLink>
                </div>
                <div className="border-skin-500">
                  <NavLink
                    className={({ isActive }) =>
                      `float-right uppercase text-white px-5 rounded-md text-lg font-semibold ${
                        isActive
                          ? "border-4 border-b-4 border-t-0 border-r-0 border-l-0 border-skin-500"
                          : ""
                      }`
                    }
                    to="/estudios"
                  >
                    Estudios
                  </NavLink>
                </div>
                <div className="border-skin-500">
                  <NavLink
                    className={({ isActive }) =>
                      `float-right uppercase text-white px-5 rounded-md text-lg font-semibold ${
                        isActive
                          ? "border-4 border-b-4 border-t-0 border-r-0 border-l-0 border-skin-500"
                          : ""
                      }`
                    }
                    to="/experiencia"
                  >
                    Experiencia
                  </NavLink>
                </div>
                <div className="border-skin-500">
                  <NavLink
                    className={({ isActive }) =>
                      `float-right uppercase text-white px-5 rounded-md text-lg font-semibold ${
                        isActive
                          ? "border-4 border-b-4 border-t-0 border-r-0 border-l-0 border-skin-500"
                          : ""
                      }`
                    }
                    to="/portafolio"
                  >
                    Portafolio
                  </NavLink>
                </div>
                <div className="border-skin-500">
                  <NavLink
                    className={({ isActive }) =>
                      `float-right uppercase text-white px-5 rounded-md text-lg font-semibold ${
                        isActive
                          ? "border-4 border-b-4 border-t-0 border-r-0 border-l-0 border-skin-500"
                          : ""
                      }`
                    }
                    to="/contacto"
                  >
                    Contacto
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
