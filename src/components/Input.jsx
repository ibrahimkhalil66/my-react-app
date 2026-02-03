import { useState } from 'react'

function Input() {
    const [lightMode, setLightMode] = useState(true);

    function handlerClick() {
        setLightMode(!lightMode);
    }

    return (
        <>
        <h1>Light Mode is : {lightMode ? "ON" : "OFF"}</h1>
        <button onClick={handlerClick}>lightMode</button>
        </>
    );
}

export default Input;

