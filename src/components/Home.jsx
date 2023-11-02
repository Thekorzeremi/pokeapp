import '../styles/Home.scss'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import pokeball from '../assets/pokeball.png'
import uncaught from '../assets/uncaught.png'
import caught from '../assets/logo.png'

export default function Home() {
    const [pkArray, setPkArray] = useState([]); // State pour stocker les données des Pokémon
    const [imgArray, setImgArray] = useState([]); // State pour stocker les images des Pokémon

    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0";

        axios.get(url, {}).then(function (response) {
            let count = response.data.count;
            const tempPkArray = [];
            // const tempImgArray = [];

            for (let current = 0; current < count; current++) {
                let nameUrl = response.data.results[current].name;
                let urlUrl = response.data.results[current].url;
                tempPkArray.push({ name: nameUrl, url: urlUrl});
            }
            setPkArray(tempPkArray);

            let lenght = tempPkArray.length;
            
            for (let current2 = 0; current2 < lenght; current2++) {
                
            }

            // for (let current2 = 1; current2 < 1017; current2++) {
            //     let pkUrl = "https://pokeapi.co/api/v2/pokemon/" + (current2);
            //     axios.get(pkUrl, {}).then(function (response2) {
            //         let imgUrl = response2.data.sprites.other['official-artwork'].front_default;
            //         tempImgArray.push({ img: imgUrl, id: current2 });
            //     });
            // }
            // for (let current3 = 10001; current3 < 10275; current3++) {
            //     let pkUrl2 = "https://pokeapi.co/api/v2/pokemon/" + (current3);
            //     axios.get(pkUrl2, {}).then(function (response3) {
            //         let imgUrl = response3.data.sprites.other['official-artwork'].front_default;
            //         tempImgArray.push({ img: imgUrl });
            //     });
            // } 
            // setImgArray(tempImgArray);
            // console.log(tempPkArray)
        });
    }, [])

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
                                {/* <img src={pkImg} alt={pkName} /> */}
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
                                {/* <h2>{pkName}</h2> */}
                            </div>
                            <div className="popup-types">
                                <div className="type">Feu</div>
                                <div className="type">Eau</div>
                            </div>
                            <div className="popup-description">
                                {/* <p>ID : { pkId }</p> */}
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
                        {/* <img src={ pkImg }></img> */}
                    </div>
                    <div className="details">
                        <div className="name">
                            {/* <p>{ pkName }</p> */}
                            {/* <img src={ uncaught } alt="" /> */}
                            <img src={ caught } alt="" />
                        </div>
                        <div className="number">
                            {/* <p>{ pkId }</p> */}
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