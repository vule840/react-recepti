import React, { Component } from 'react';


const Form  = props => (
		<form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
			<input className="form__input" onClick={props.test} name="recipeName" type="text"/>
			<button className="form__button">Search</button>
		</form>
	)

export default Form