import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const Home = ({lista}) => {
	console.log(lista);
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Mis animales</h1>
			<div className="row">
				{lista.map(function(animal){
				return(
					<div className="col">
						<p className="text-danger">{animal.nombre}</p>
						<span>{animal.descripcion}</span>
					</div>
				)
				})}
			</div>

			<div className="row">
				{lista.map(function(animal){
				return(
					<div className="col">
						<Card title={animal.nombre} description={animal.descripcion} image={animal.imagen}/>
					</div>
				)
				})}
			</div>

			
		</div>

	);
};

export default Home;