import '../styles/Home.scss'
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {
    const [pkImg, setPkImg] = useState('');
    const [pkName, setPkName] = useState('');
    const [pkId, setPkId] = useState('');

    useEffect(() => {
        const test = axios
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

    return (
        <div className='content'>
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
                    <img src={ pkImg }></img>
                </div>
                <div className="details">
                    <div className="name">
                        <p>{ pkName }</p>
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
            {/* <div className="cards"></div> */}

            </div>
        </div>
    )
}