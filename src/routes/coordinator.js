export const goToPokemonsList = (navigate) => {
    navigate("/");
  };
  
  export const goToPokemonDetail = (navigate, name) => {
    navigate(`/pokemon/${name}`);
  };
  
  export const goToPokedex = (navigate) => {
    navigate("/pokedex");
  };
  export const goToBack = (navigate) =>{
    navigate(-1)    
  }
  
  