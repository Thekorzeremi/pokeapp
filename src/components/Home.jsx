import '../styles/Home.scss'
import axios from "axios";

export default function Home() {
    let name
    const test = axios
    .get("https://pokeapi.co/api/v2/pokemon/6", {
    })
    .then(function (response) {
        console.log(response.data)
        console.log(response.data.id)
        console.log(response.data.name)
        console.log(response.data.sprites.other["official-artwork"])
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