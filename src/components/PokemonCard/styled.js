import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeCardContainer = styled.div`

width: 240px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 5px 5px rgba(0,0,0,0.5);
    padding: 1 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    padding-bottom: 10px;
    margin-top: 30px

    
`;

export const PokeCardContainerCircle = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    background-color: #f5f5f5;
    border-radius: 10rem;
    box-shadow: 0 5px 5px rgb(0,0,0,0.5);
    padding: 0.5rem;
    margin-top: 10px;

`;

export const ImgContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 10px;
  margin-top:30px
`;

export const PokeImg = styled.img`
  height: 75%;
`;

export const ButtonsContainer = styled.div`
display:flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 200px;
  align-items: center;
  gap:10px;
  justify-content:center
  
`;

export const ButtonsAdd = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
outline: none;
    border: none;
    width: 150px;
    padding: 0.3rem 0;
    font-size: 13px;
    color: #ffffff;
    background-color: rgb(209, 33, 33);
    border-radius: 8px;
    text-align:center;

`;
export const ButtonDetails = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
outline: none;
    border: none;
    width: 150px;
    padding: 0.3rem 0;
    font-size: 13px;
    color: black;
    background-color: rgb(253, 204, 6) ;
    border-radius: 8px;
    text-align:center;
   

`;
export const Type= styled.div`
font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #aaa9a9;
`;
export const Name = styled.div`
font-size: 18px;
    margin-top: 15px;
   text-transform: uppercase;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #aaa9a9;
`;