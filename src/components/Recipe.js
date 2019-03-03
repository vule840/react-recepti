import React, { Component } from 'react';
import { Link } from "react-router-dom";
const API_KEY = '8c6be6b656f642eac141f84bea20274d'

class Recipe extends React.Component{
	
	state = {
		activeRecipe: []
	}
	componentDidMount = async () => {

		//Ovo dobivamo jer smo stavili Link to u Recipes state: s{recipe: recipe.title}
		const title = this.props.location.state.recipe
		//e.preventDefault();
		const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
		
		const res = await req.json(); 
		//on uzme sve titleove a tebi treba samo prvi, sa tim id-em
		console.log(res.recipes[0]);

		this.setState({ activeRecipe: res.recipes[0] })
	}

	render(){
		//Tu cemo sam skratiti recipe da pišemo bezveze
		const recipe = this.state.activeRecipe
		console.log(this.props)
		return(
			<div className="container">
				{ this.state.activeRecipe.length !==0 &&
					<div className="active-recipe">
					<div className="active-recipe__im">
						<img className="img-fluid" src={recipe.image_url} alt={recipe.title} />
						<h3 className="active-recipe__title">{recipe.title}</h3>
						<h4 className="active-recipe__publisher">
						 Publisher: <span>{recipe.publisher}</span> </h4>
						 <p className="active-recipe__website">
						 	Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
						 </p>
						 <button className="active-recipe__button">
						 	<Link to="/"> Go Home</Link>
						</button>
					</div>
				</div>


				}
				
			</div>
			)
				}
	}



/*const Recipe  = props => (
		<div>
			Recipe component
		</div>
	)*/

export default Recipe