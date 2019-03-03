import React, { Component } from 'react';
import Form from './components/Form'
import Recipes from './components/Recipes'

import './App.css';

const API_KEY = '8c6be6b656f642eac141f84bea20274d'

class App extends Component {

	state = {
		recipes: []
	}

	getRecipe = async (e) => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();
		const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
		
		const data = await api_call.json(); 
		this.setState({
			recipes: data.recipes
		})
		console.log(this.state.recipes);
	}
/*	componentDidMount = () =>{
		const json = localStorage.getItem("recipes")
		const recipes = JSON.parse(json)
		//pošto je es6, možeš ako je string isti kao ovdje recipe: recipes ostaviti samo string
		this.setState({recipes})
		//console.log(recipes)
	}
	componentDidUpdate = () => {
		const recipes = JSON.stringify(this.state.recipes)
		localStorage.setItem("recipes", recipes)
		//console.log(recipes)
	}*/
	test(){ 
		console.log('test')

	}
  render() {
    return (
      <div className="App">
       	<header className="App-header">
       		<h1 className="App-title">Recipe search</h1>

       	</header>
	       	<Form test={this.test} getRecipe={this.getRecipe}></Form>
	       	<Recipes recipes={this.state.recipes}></Recipes>
	       
      </div>
    );
  }
}

export default App;
	