import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

// Apuntes -------------------

export default function Card({title, description, image}) {
    const [colorName, setColorName] = useState()
    const [inputValue, setInputValue] = useState()
    const [animalName, setAnimalName] = useState(title)

    function changeColorName(){
        // Aqui voy a cambiar el color del nombre
        const colors = ['text-danger', 'text-warning', 'text-success', 'text-info', 'text-light']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        setColorName(randomColor)
    }

    function inputOnChange(event){
        setInputValue(event.target.value)

    }

    function changeName(){
        console.log("Entro en changeName con el valor: " + inputValue)
        setAnimalName(inputValue)
    }

    return (
        <div className="card" style={{width: "9rem;", marginTop: "5vh"}}>
            <img src={image} className="card-img-top" alt="..." style={{width: "500px", height:"500px"}}/>
            <div className="card-body">
                <h5 className={"card-title " + colorName}>{animalName ? animalName : 'Default title'}</h5>
                <p className="card-text"> {description ? description : 'Some quick example text to build on the card title and make up the bulk of the card’s content.'}</p>
                <button onClick={changeColorName} className="btn btn-primary">Cambiar color</button>
                <p/>
                <input type="text" onChange={inputOnChange} onKeyDown={(e) => { if (e.key === "Enter") changeName() }} />
                <button onClick={changeName} className="btn btn-primary">Cambiar nombre</button>
            </div>
        </div>
    );
}