
export const Characters = (props) => {
    const { characters } = props;
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home">Volver a Home </span>
            <div className="container-characters">
            {
                characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <p>{character.name}</p>
                    </div>
                ))
            }
            </div>
            
        </div>
    );
}