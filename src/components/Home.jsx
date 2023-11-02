import axios from "axios";

export default function Home() {
    let name
    const test = axios
    .get("https://pokeapi.co/api/v2/pokemon/6", {
    })
    .then(function (response) {
        console.log(response.data)
        console.log(response.data.name)
        let name = response.data.sprites.other.official-artwork
        console.log(name)
    })
    return (
        <div>
            <p>Hello World !</p>
        </div>
    )
}