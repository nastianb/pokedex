import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonDetailScreen from '../screens/PokemonDetailScreen/PokemonDetailScreen'
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen'
import PokemonsListScreen from '../screens/PokemonsListScreen/PokemonsListScreen'

 const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path='/' element = {<PokemonsListScreen/>} />
        <Route  path='/pokemon/:name' element = {<PokemonDetailScreen/>} />
        <Route  path='/pokedex' element = {<PokedexScreen />} />
    </Routes>
    </BrowserRouter>
  )
}
export default Router