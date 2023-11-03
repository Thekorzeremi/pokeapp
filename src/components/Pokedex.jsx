import "../styles/Pokedex.scss";
import React, { useState } from 'react';
import logo from '../assets/logo.png'

export default function Pokedex() {

    // RECOVER ALL DATA FROM LOCAL STORAGE & SETTER/GETTER
    const storedData = JSON.parse(localStorage.getItem('selectedPokemon'));
    const [pokemonData, setPokemonData] = useState(storedData);

    // CLEAR ALL LOCAL STORAGE
    const erasePk = () => {
        localStorage.clear();
        alert("ALL POKEMONS REMOVED FROM LOCALSTORAGE")
        window.location.reload();
    }

    // REMOVE 1 POKEMON FROM POKEDEX
    const removePokemon = (index) => {
        const updatedData = [...pokemonData];
        updatedData.splice(index, 1);
        setPokemonData(updatedData);
        localStorage.setItem('selectedPokemon', JSON.stringify(updatedData));
      };

    return (
        <div className='content'>
            <div className="pk-sct">
                <div className="title">
                    <img src={ logo } alt="" />
                    <p>My Pokedex</p>
                </div>
                <div className="pk-erase">
                    <div className="erase-btn" onClick={erasePk}><p>ERASE ALL</p></div>
                </div>
                {storedData &&
                storedData.map((pokemon, index) =>
                    <div className="pk-main-row">
                            <div className="pk-row">
                                <div className="pk-img"><img src={pokemon.img} alt="" /></div>
                                <div className="pk-name">
                                    <p>{pokemon.name}</p>
                                </div>
                                <div className="pk-id">
                                    <p>{pokemon.id}</p>
                                </div>
                                <div className="remove-btn" onClick={() => removePokemon(index)}>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
}