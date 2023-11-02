import '../styles/Home.scss'
import axios from "axios";
import { useState } from 'react';

export default function Home() {
    // let name
    // const test = axios
    // .get("https://pokeapi.co/api/v2/pokemon/6", {
    // })
    // .then(function (response) {
    //     console.log(response.data)
    //     console.log(response.data.name)
    //     let name = response.data.sprites.other.official-artwork
    //     console.log(name)
    // })

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);

    };

    const closePopup = () => {
        setPopupOpen(false);

    };
    return (
        <div className='content'>
            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span onClick={closePopup} className="close-popup">
                        &times;
                        </span>
                        <div className="popup-left">
                            <div className="popup-image"></div>
                            <div className="stats-popup">
                                <div className="row">
                                    <div className="bar-stats"></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="bar-stats"></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="bar-stats"></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="bar-stats"></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="bar-stats"></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popup-details">
                            <div className="popup-name">
                                <h2>Name</h2>
                            </div>
                            <div className="popup-types">
                                <div className="type">Feu</div>
                                <div className="type">Eau</div>
                            </div>
                            <div className="popup-description">
                                <p>ZER DSFQ DSF E RQS DFQ SDF ZER FGDSQ  ZEF SQ </p>
                            </div>
                            <div className="popup-attacks">
                                <div className="attacks">Eboulement</div>
                                <div className="attacks">Eboulement</div>
                                <div className="attacks">Eboulement</div>
                                <div className="attacks">Eboulement</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="searchbar">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="filter">
                <div className="alpha" id='btn'>
                    <p>Alphabetics</p>
                </div>
                <div className="type" id='btn'>
                    <p>Type</p>
                </div>
                <div id='btn'>
                    <p>Temp</p>
                </div>
            </div>
            <div className="container">
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards" onClick={openPopup}>
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="pp"></div>
                <div className="details">
                    <div className="name">
                        <p>Name</p>
                    </div>
                    <div className="number">
                        <p>1</p>
                    </div>
                </div>
            </div>
            {/* <div className="cards"></div> */}

            </div>
        </div>
    )
}