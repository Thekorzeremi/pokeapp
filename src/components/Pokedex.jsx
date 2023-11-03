import "../styles/Pokedex.scss";
import React, { useState } from 'react';

export default function Pokedex() {

    const storedData = JSON.parse(localStorage.getItem('selectedPokemon'));
    const [pokemonData, setPokemonData] = useState(storedData);

    const erasePk = () => {
        localStorage.clear();
        alert("LocalStorage bien effacé");
        window.location.reload();
    }

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
                    <p>Mon pokédex</p>
                </div>
                <div className="pk-erase">
                    <div className="erase-btn" onClick={erasePk}><p>ERASE ALL</p></div>
                </div>
                {storedData &&
                storedData.map((pokemon, index) =>
                    <div className="pk-main-row">
                            <div className="pk-row">
                                <div className="pk-img"><img src={pokemon.img} alt="" /></div>
                                <div className="pk-name">{pokemon.name}</div>
                                <div className="pk-id">{pokemon.id}</div>
                                <div className="remove-btn" onClick={() => removePokemon(index)}><p>REMOVE</p></div>
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
}