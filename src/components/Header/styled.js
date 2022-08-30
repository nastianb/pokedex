import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
 display: flex;
  justify-content: flex-start;
  gap: 420px;
  background-color: rgb(209, 33, 33);
  height: 130px;
`

export const Pokemon = styled.header`
padding-bottom: 8px;
  padding-top: 6px;
  width: 200px;
  position: relative;
`


export const Button = styled.header`

width: 60px;
height: 30px;
margin-top: 40px;
margin-left: 20px;
padding: 1em 2em;
display: flex;
align-items: center;
justify-content: center;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 10px;
text-transform: uppercase;
letter-spacing: 2.5px;
font-weight: 500;
color: #000;
background-color: rgb(253, 204, 6);
border: none;
border-radius: 25px;
box-shadow: 0px 8px 15px rgba(208, 159, 10, 0.545);
transition: all 0.3s ease 0s;
cursor: pointer;
outline: none;

`



