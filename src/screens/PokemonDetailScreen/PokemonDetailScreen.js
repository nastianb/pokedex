import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import {
  TypeAndMovesContainer,
  PokeInfosContainer,
  ImgWrapper,
  ImagesContainer,
  StatsContainer,
  TitleContainer,
  TypesContainer,
  MovesContainer
} from "./styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import typeColors from "../../constants/typeColors";
import {goToBack} from '../../routes/coordinator'


const PokemonDetailScreen = () => {
  const { name, telaPokedex } = useParams();
  const navigate = useNavigate();
  const { pokemons, pokedex } = useContext(GlobalStateContext);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    let current = [];
    if (telaPokedex) {
      current = pokedex.find((item) => {
        return item.name === name;
      });
    } else {
      current = pokemons.find((item) => {
        return item.name === name;
      });
    }

    if (!current) {
      axios
        .get(`${BASE_URL}/pokemon/${name}`)
        .then((res) => setSelectedPokemon(res.data))
        .catch((err) => console.log(err.response.message));
    } else {
      setSelectedPokemon(current);
    }
  }, []);

  return (
    <div>
      <Header leftButtonFunction={() => goToBack(navigate)} showRightButton />
      {selectedPokemon && selectedPokemon.sprites && (
        <PokeInfosContainer>
          <ImagesContainer>
            <ImgWrapper src={selectedPokemon.sprites.other.dream_world.front_default} />
           
          </ImagesContainer>
          <StatsContainer style={{ backgroundColor: typeColors[selectedPokemon.types[0].type.name] }} key ={selectedPokemon.id}>
            <TitleContainer>Poderes</TitleContainer>
            {selectedPokemon &&
              selectedPokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
                );
              })}
          </StatsContainer>
          <TypeAndMovesContainer >
            <TypesContainer style={{ backgroundColor: typeColors[selectedPokemon.types[0].type.name] }} key ={selectedPokemon.id}>
              {selectedPokemon &&
                selectedPokemon.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>;
                })}
            </TypesContainer>
            <MovesContainer style={{ backgroundColor: typeColors[selectedPokemon.types[0].type.name] }} key ={selectedPokemon.id}>
              <TitleContainer>Principais ataques</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  );
                })}
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
};

export default PokemonDetailScreen;
