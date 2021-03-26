//this contains logic to generate new state, everytime when we dispatch cocktail actions
// this will also contain initial state of application
import * as ActionTypes from "./ActionTypes";

let INITIAL_STATE = {
    drinks : [],
    loading : false
};

let CocktailReducer = (previousState = INITIAL_STATE, action) => {
        
    switch (action.type) {        

        case ActionTypes.FetchCocktailFullFilled:
        case ActionTypes.SortDrinks:
            console.log("Addcocktail To Store", action)
            //we will create a new state using payload passed from user component and container
            //for every action dispatch reducer generates a new state
            //let newState = Object.assign(previousState);
        
            return {...previousState, drinks : action.payload.drinks, loading: false}; //returns a new state
    
        case ActionTypes.ToggleLoading:
            console.log("Addcocktail To Store", action)
            return {...previousState, loading : action.payload.loading}; //returns a new state of loading
        
        default:
            return previousState;
    }
}

export default CocktailReducer;