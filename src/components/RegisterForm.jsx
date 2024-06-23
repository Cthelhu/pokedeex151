import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <form className="hidden">
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg
            className="absolute ml-3 fill-gray-400"
            width={24}
            viewBox="0 0 512 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <input
            type="email"
            id="email"
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full "
            placeholder="CORREO ELECTRÓNICO"
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg
            className="absolute ml-3 fill-gray-400"
            width={24}
            viewBox="0 0 24 24"
          >
            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          <input
            type="text"
            id="username"
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="NOMBRE DE USUARIO"
          />
        </div>
        <div className="flex items-center text-lg mb-6 md:mb-8">
          <svg
            className="absolute ml-3 fill-gray-400"
            viewBox="0 0 24 24"
            width={24}
          >
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
          </svg>
          <input
            type="password"
            id="password"
            className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
            placeholder="CONTRASEÑA"
          />
        </div>

        <button className="bg-[#E75757] font-medium p-2 md:p-4 text-white uppercase w-full">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
