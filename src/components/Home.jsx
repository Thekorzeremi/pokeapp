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
        <div>
            <p>Hello World !</p>
        </div>
    )
}