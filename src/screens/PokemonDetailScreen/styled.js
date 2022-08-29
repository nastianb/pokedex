import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeInfosContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  height: 40vh;
  margin-top: 2.5rem;
 
`;

export const StatsContainer = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: ${backgroundCard};
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 240px;
      border-radius: 1rem;
      box-shadow: 0 5px 5px rgba(0,0,0,0.5);
      padding: 0 1.5rem;
      box-sizing: border-box;
      margin-bottom: 30px;
      padding-bottom: 10px;
      margin-top: 30px;
`;

export const TitleContainer = styled.h2`
  align-self: center;

`;

export const TypeAndMovesContainer = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  align-self: center;
  height: 80%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  
`;

export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-self: center;
  padding-left: 20px;
  width: 300px;
      border-radius: 1rem;
      box-shadow: 0 5px 5px rgba(0,0,0,0.5);
      padding: 0 1.5rem;
      box-sizing: border-box;
`;

export const MovesContainer = styled.div`
  background: ${backgroundCard};
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  align-items: center;
  width: 300px;
      border-radius: 1rem;
      box-shadow: 0 5px 5px rgba(0,0,0,0.5);
      padding: 0 1.5rem;
      box-sizing: border-box;
`;
