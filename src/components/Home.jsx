import '../styles/Home.scss'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import pokeball from '../assets/pokeball.png'
import uncaught from '../assets/uncaught.png'
import caught from '../assets/logo.png'

export default function Home() {

    const [pkImg, setPkImg] = useState('');
    const [pkName, setPkName] = useState('');
    const [pkId, setPkId] = useState('');

    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/6", {
        })
        .then(function (response) {
            // console.log(response.data);
            // pkId = response.data.id;
            // pkName = response.data.name;
            let imgUrl;
            let nameUrl;
            let idUrl;
            imgUrl = response.data.sprites.other["official-artwork"].front_default;
            nameUrl = response.data.name;
            idUrl = response.data.id;
            setPkImg(imgUrl);
            setPkName(nameUrl);
            setPkId(idUrl);
        })
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
                            <div className="popup-image">
                                <img src={pkImg} alt={pkName} />
                            </div>
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
                                <h2>{pkName}</h2>
                            </div>
                            <div className="popup-types">
                                <div className="type">Feu</div>
                                <div className="type">Eau</div>
                            </div>
                            <div className="popup-description">
                                <p>ID : { pkId }</p>
                                <br/>
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
                <img src={ pokeball } alt="" />
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
                    <p>ID</p>
                </div>
            </div>
            <div className="container">
                <div className="cards" onClick={openPopup}>
                    <div className="pp">
                        <img src={ pkImg }></img>
                    </div>
                    <div className="details">
                        <div className="name">
                            <p>{ pkName }</p>
                            {/* <img src={ uncaught } alt="" /> */}
                            <img src={ caught } alt="" />
                        </div>
                        <div className="number">
                            <p>{ pkId }</p>
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
            </div>
        </div>
    )
}