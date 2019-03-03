import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"

import App from "../App"
import Recipe from "./Recipe"
import Test from "./Test"

const Router = () => (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={App} exact></Route>
				<Route path="/recipe/:id" component={Recipe}></Route>		
				<Route path="/test" component={Test}></Route>	
			</Switch>
			
		</BrowserRouter>
	)

export default Router