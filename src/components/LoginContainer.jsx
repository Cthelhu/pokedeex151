import logoPokedex from "../img/pokemon_logo.png";
import LoginForm from "./LoginForm";
import LoginToggle from "./LoginToggle";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const LoginContainer = () => {

  const [hidden, setHidden] = useState(false)

  return (
    <div className="shadow-2xl mt-10 rounded-[20px]  min-w-32 justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto  w-1/2" src={logoPokedex} alt="pokemon logo" />
        <h2 className="mt-5 text-center text-2xl font leading-9 tracking-tight text-gray-600">
          <span className="font-bold">Inicia sesión</span> con tu cuenta de
          entrenador Pokémon o <span className="font-bold">regístrate</span>
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginToggle 
        hidden={hidden}
        setHidden={setHidden}/>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm 
        hidden={hidden}
        setHidden={setHidden} />
        <RegisterForm
        hidden={hidden}
        setHidden={setHidden} />
      </div>
    </div>
  );
};

export default LoginContainer;
