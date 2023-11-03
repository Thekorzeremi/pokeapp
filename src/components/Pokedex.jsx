import "../styles/Pokedex.scss"

export default function Pokedex() {
    return (
        <div className='content'>
            <div className="pk-sct">
                <div className="title">
                    <p>Mon pokédex</p>
                </div>
                <div className="pk-items">
                    <div className="pk-row">
                        <div className="pk-name"></div>
                        <div className="pk-img"></div>
                        <div className="pk-id"></div>
                        <div className="remove-btn"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}