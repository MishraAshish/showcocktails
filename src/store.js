//this is going to return the store component which includes all the reducers and other middlewares
//middlewares - to log messages, to make promise call, to make server call

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import cocktail from "../src/app/State/CocktailReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action); 

    next(action); //move to the actual execution
};

export default createStore(
    combineReducers({
        cocktail //short-hand ->  used to replace cocktail : cocktail with only - cocktail : ES6
    }),
    {}, //intial state for store states
    applyMiddleware(logger, thunk, promise) //middle wares tp used at various places like action.js
)