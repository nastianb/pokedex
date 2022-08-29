import React, { useContext } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeListContainer } from "./styled";
import { useNavigate} from "react-router-dom";
import { goToPokemonsList } from "../../routes/coordinator";

const PokedexScreen = () => {
  const { pokedex } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  return (
    <>
      <Header
        title={"Pokédex"}
        leftButtonFunction={() => goToPokemonsList(navigate)}
      />
      <PokeListContainer>
        {pokedex &&
          pokedex.map((poke) => {
            return <PokemonCard isPokedex key={poke.name} poke={poke} />;
          })}
      </PokeListContainer>
    </>
  );
};

export default PokedexScreen;
