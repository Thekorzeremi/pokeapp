import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'
import Pokedex from './Pokedex'
import '../styles/NavBar.scss'

// ROUTER
export default function NavBar() {
    return (
        <div className="content">
            <div className="navbar">
                <Link to='/'>PokeList</Link>
                <Link to='/Pokedex'>PokeDex</Link>
            </div>
            <Routes>
                <Route path='/' element={ <Home /> }></Route>
                <Route path='/Pokedex' element={ <Pokedex /> }></Route>
            </Routes>
        </div>
    )
}