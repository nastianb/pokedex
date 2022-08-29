import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import {
  PokeCardContainer,
  ImgContainer,
  PokeImg,
  ButtonsContainer,
  PokeCardContainerCircle,
  ButtonsAdd,
  ButtonDetails,
  Type,
  Name
} from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import typeColors from '../../constants/typeColors'

const PokemonCard = (props) => {
  const navigate= useNavigate();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    GlobalStateContext
  );

  const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
      (item) => item.name === props.poke.name
    );
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonsList = [...pokemons, props.poke];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  return (
    <PokeCardContainer style={{ backgroundColor: typeColors[props.poke.types[0].type.name] }} key ={props.poke.id} >
       <Name>{props.poke.name}</Name>
      <PokeCardContainerCircle>
      <ImgContainer>
        <PokeImg
          src={props.poke && props.poke.sprites.other.dream_world.front_default}
          alt={props.poke.name}
        />
      </ImgContainer>
      </PokeCardContainerCircle>
      <Type>{props.poke.types[0].type.name}</Type>
      <ButtonsContainer>
        <ButtonsAdd onClick={props.isPokedex ? removeFromPokedex : addToPokedex}>
          {props.isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </ButtonsAdd>
        <ButtonDetails
          onClick={() =>
            goToPokemonDetail(navigate, props.poke.name, props.isPokedex)
          }
        >
          Ver detalhes
        </ButtonDetails>
      </ButtonsContainer>
    </PokeCardContainer>
  );
};

export default PokemonCard;
