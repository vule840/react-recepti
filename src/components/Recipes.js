import React, { Component } from 'react';

import { Link } from "react-router-dom";

const Recipes  = props => (
		<div className="container">
			<div className="row">

				{props.recipes.map((recipe) => {
	       		return (
	       				<div key={recipe.title} className="col-md-4" key={recipe.recipe_id} style={{marginBottom: "2rem" }}>
		       				<div className="recipes__box">
			       				<img className="img-fluid recipes__box-img" src={recipe.image_url} alt={recipe.title}/>
			       				<div className="recipe__text">
			       				 {/*Ovjde se trimao naslov, terarni operatori i na kraju točice ako ima 25 karaktera*/}
			       					<h5 className="recipes__title">{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}</h5>
			       					<p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
			       					<button className="recipe_buttons">
			       					 {/*Dvostruki ep zagrada da možemo pisati template tagove*/}
			       						<Link to={{ pathname: `/recipe/${recipe.recipe_id}`,
			       									state: {recipe: recipe.title}
			       					}}>
			       							View Recipe	
			       						</Link>
			       					</button>			
			       				</div>
			       				 
		       				</div>
	       					
	       				</div>
	       			)
	       	})}
			</div>
		</div>
	)

export default Recipes