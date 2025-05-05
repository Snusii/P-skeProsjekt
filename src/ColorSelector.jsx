

export default function ColorSelector ({ setColor }) {
    
    return(
        <div id="ColorSelector">
            <button onClick={setColor('Blue') }>Blue</button>
            <button onClick={setColor('Pink') }>Pink</button>
            <button onClick={setColor('Purple') }>Purple</button>
            <button onClick={setColor('Black') }>Black</button>
        </div>
    )
}