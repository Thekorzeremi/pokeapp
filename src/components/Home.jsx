import '../styles/Home.scss'
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000"
        let pkArray = []
        let imgArray = []

        axios.get(url, {}).then(function (response) {
            let count = response.data.count;
            for (let current = 0; current < count; current++) {
                let nameUrl = response.data.results[current].name;
                pkArray.push({name: nameUrl, id: current + 1});
            }
        })
        for(let current2 = 0; current2 < 1292; current2++) {
            let pkUrl = "https://pokeapi.co/api/v2/pokemon/" + (current2 + 1);
            axios.get(pkUrl, {}).then(function (response2) {
                let imgUrl = response2.data.sprites.other['official-artwork'].front_default
                imgArray.push({img: imgUrl})
            })
        }        
    })

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
                <div className="pp">
                    {/* <img src={ pkImg }></img> */}
                </div>
                <div className="details">
                    <div className="name">
                        {/* <p>{ pkName }</p> */}
                    </div>
                    <div className="number">
                        {/* <p>{ pkId }</p> */}
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