import { useEffect, useState } from "react";

export default function Welcome(props) {
    const [counter, setCounter] = useState(0)
    const [bandera, setBandera] = useState(true)

    const { name } = props

    useEffect(() => {
        console.log(bandera)
    },[bandera])

    const aumentarContador = () => {
        setCounter(counter + 1)
        setBandera(!bandera)
    }


    return (
        <>
            <h1> Hola {name}</h1>
            <h2>Contador: {counter}</h2>
            <h4>Bandera o semáforo: {bandera ? 'rojo' : 'verde'}</h4>
            <div>
                <button
                    type="submit"
                    onClick={aumentarContador}
                >Suma counter</button>
                <button onClick={() => setCounter(0)} >Reiniciar contador</button>
            </div>
        </>
    );
}