import React from "react";
import LoginContainer from "../components/LoginContainer";
import PokemonLogo from "../img/Pokédex_logo.png";
import BgPattern from "../img/bg_pattern.png";


const Home = () => {
  return (
    <body>
      <div
        className="h-screen w-screen flex flex-col items-center justify-center bg-repeat bg-center bg-gray"
        style={{ backgroundImage: `url(${BgPattern})` }}
      >
        <img src={PokemonLogo} alt="pokemon logo" className="mw-42" />
        <LoginContainer />
      </div>
    </body>
  );
};

export default Home;
