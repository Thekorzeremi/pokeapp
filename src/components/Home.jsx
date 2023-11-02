import '../styles/Home.scss'
import React, { useState, useEffect } from 'react';
import axios from "axios";

import pokeball from '../assets/pokeball.png'
import uncaught from '../assets/uncaught.png'
import caught from '../assets/logo.png'

import fire from '../assets/types/fire.png'
import fight from '../assets/types/fight.png'
import psy from '../assets/types/psy.png'
import poison from '../assets/types/poison.png'
import dragon from '../assets/types/dragon.png'
import ghost from '../assets/types/ghost.png'
import dark from '../assets/types/dark.png'
import ground from '../assets/types/ground.png'
import fairy from '../assets/types/fairy.png'
import water from '../assets/types/water.png'
import fly from '../assets/types/fly.png'
import bug from '../assets/types/bug.png'
import normal from '../assets/types/normal.png'
import rock from '../assets/types/rock.png'
import electric from '../assets/types/electric.png'
import grass from '../assets/types/grass.png'
import ice from '../assets/types/ice.png'
import steel from '../assets/types/steel.png'

export default function Home() {
    const [pkImg, setPkImg] = useState('');
    const [pkName, setPkName] = useState('');
    const [pkId, setPkId] = useState('');
    const [pkType1, setPkType1] = useState('');
    const [pkType2, setPkType2] = useState('');
    const [pkStats, setPkStats] = useState('');
    const [pkArray, setPkArray] = useState([]); // State pour stocker les données des Pokémon
    const [imgArray, setImgArray] = useState([]); // 

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
        axios
        .get("https://pokeapi.co/api/v2/pokemon/453", {
        })
        .then(function (response) {
            let imgUrl;
            let nameUrl;
            let idUrl;
            let typeUrl1;
            let typeUrl2;
            let statsUrl;
            imgUrl = response.data.sprites.other["official-artwork"].front_default;
            nameUrl = response.data.name;
            typeUrl1 = response.data.types[0].type.name

            if (response.data.types.lenght > 1) {
                typeUrl2 = response.data.types[1].type.name
            }

            idUrl = response.data.id;
            statsUrl = response.data.stats
            setPkImg(imgUrl);
            setPkName(nameUrl);
            setPkId(idUrl);
            setPkType1(typeUrl1);
            setPkType2(typeUrl2);
            setPkStats(statsUrl);
        })

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);

    };

    const closePopup = () => {
        setPopupOpen(false);

    };

    let classType1;
    let classType2;
    let imgType1;
    let imgType2;

    switch(pkType1) {
        case "bug":
            classType1 = "bug";
            imgType1 = bug
            break;
        case "fight":
            classType1 = "fight";
            imgType1 = fight
            break;
        case "psychic":
            classType1 = "psy";
            imgType1 = psy
            break;
        case "poison":
            classType1 = "poison";
            imgType1 = poison
            break;
        case "dragon":
            classType1 = "dragon";
            imgType1 = dragon
            break;
        case "ghost":
            classType1 = "ghost";
            imgType1 = ghost
            break;
        case "dark":
            classType1 = "dark";
            imgType1 = dark
            break;
        case "ground":
            classType1 = "ground";
            imgType1 = ground
            break;
        case "fire":
            classType1 = "fire";
            imgType1 = fire
            break;
        case "fairy":
            classType1 = "fairy";
            imgType1 = fairy
            break;
        case "water":
            classType1 = "water";
            imgType1 = water
            break;
        case "fly":
            classType1 = "fly";
            imgType1 = fly
            break;
        case "normal":
            classType1 = "normal";
            imgType1 = normal
            break;
        case "steel":
            classType1 = "steel";
            imgType1 = steel
            break;
        case "rock":
            classType1 = "rock";
            imgType1 = rock
            break;
        case "electric":
            classType1 = "electric";
            imgType1 = electric
            break;
        case "grass":
            classType1 = "grass";
            imgType1 = grass
            break;
        case "ice":
            classType1 = "ice";
            imgType1 = ice
            break;
    }

        switch(pkType2) {
            case "bug":
                classType2 = "bug";
                imgType2 = bug
                break;
            case "fight":
                classType2 = "fight";
                imgType2 = fight
                break;
            case "psy":
                classType2 = "psy";
                imgType2 = fight
                break;
            case "poison":
                classType2 = "poison";
                imgType2 = poison
                break;
            case "dragon":
                classType2 = "dragon";
                imgType2 = dragon
                break;
            case "ghost":
                classType2 = "ghost";
                imgType2 = ghost
                break;
            case "dark":
                classType2 = "dark";
                imgType2 = dark
                break;
            case "ground":
                classType2 = "ground";
                imgType2 = ground
                break;
            case "fire":
                classType2 = "fire";
                imgType2 = fire
                break;
            case "fairy":
                classType2 = "fairy";
                imgType2 = fairy
                break;
            case "water":
                classType2 = "water";
                imgType2 = water
                break;
            case "flying":
                classType2 = "fly";
                imgType2 = fly
                break;
            case "normal":
                classType2 = "normal";
                imgType2 = normal
                break;
            case "steel":
                classType2 = "steel";
                imgType2 = steel
                break;
            case "rock":
                classType2 = "rock";
                imgType2 = rock
                break;
            case "electric":
                classType2 = "electric";
                imgType2 = electric
                break;
            case "grass":
                classType2 = "grass";
                imgType2 = grass
                break;
            case "ice":
                classType2 = "ice";
                imgType2 = ice
                break;
    }

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
                                    <div className="text-stats">
                                        <p>STA</p>
                                    </div>
                                    <div id="bar-stats" className={ classType1 }></div>
                                    <div className="text-stats">
                                        {/* <p>{pkStats[0]}</p> */}
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-stats">
                                        <p>ATK</p>
                                    </div>
                                    <div id="bar-stats" className={ classType1 }></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-stats">
                                        <p>A.SPE</p>
                                    </div>
                                    <div id="bar-stats" className={ classType1 }></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-stats">
                                        <p>DEF</p>
                                    </div>
                                    <div id="bar-stats" className={ classType1 }></div>
                                    <div className="text-stats">
                                        <p>100</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-stats">
                                        <p>D.SPE</p>
                                    </div>
                                    <div id="bar-stats" className={ classType1 }></div>
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
                                <div id="type" className={classType1 }>
                                    <p>{ pkType1 }</p>
                                    <img src={imgType1} alt="" />
                                    </div>
                                <div id="type" className={classType2}>
                                    <p>{ pkType2 }</p>
                                    <img src={imgType2} alt="" />
                                    </div>
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