import axios from "axios";

export default function Home() {
    const test = axios({
        url:'https://pokeapi.co/api/v2/pokemon/6/',
        method: 'get',
        transformRequest: [function (data) {
            return data;
        }]
    });
    console.log(test);
    return (
        <div>
            <p>Hello World !</p>
        </div>
    )
}