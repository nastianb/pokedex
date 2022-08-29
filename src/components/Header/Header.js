import React, {useEffect} from "react";
import { useNavigate} from "react-router-dom";
import {  HeaderContainer, LeftHeaderButton, RightHeaderButton, Button, Pikachu,Pokemon } from "./styled";
import { goToPokedex, goToBack } from "../../routes/coordinator";
import Logo from '../../constants/lgo.png'


const Header = ({ leftButtonFunction, title, showRightButton }) => {
  // const navigate = useNavigate();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Pokedex";
      case "Pokédex":
        return "Voltar";
      default:
        return "Voltar";
    }
  };
  
  return (
    // <HeaderContainer>
    //   <LeftHeaderButton onClick={leftButtonFunction}>
    //     {leftButtonTitle()}
    //   </LeftHeaderButton>
    //   <h1>{title}</h1>
    //   {showRightButton && (
    //     <RightHeaderButton onClick={() => goToPokedex(navigate)}>
    //       Ir para pokedex
    //     </RightHeaderButton>
    //   )}
    // </HeaderContainer>
    <HeaderContainer>
      <Button onClick={leftButtonFunction}>{leftButtonTitle()}</Button>
      <Pokemon>
      <img  src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"  alt="pokemon" /> 
      </Pokemon>
      
    </HeaderContainer>  
  );
};

export default Header;
