//this will contain all the actions that are going to be raised by action creators
//action is an object that contains - type (action type) and payload (the data to be passed to store)
import * as ActionTypes from "./ActionTypes";

//action that would be dispatched to the store (eventually to reducer)
export const toggleLoading = (loading) => ({        
    type: ActionTypes.ToggleLoading,
    payload: {loading}
})

//action that would be dispatched to the store (eventually to reducer)
export const addCocktailListToStore = (drinks) => ({        
    type: ActionTypes.SortDrinks,
    payload: {drinks}
})

//dispatching to cocktail reducer using promise (plain promise)
export const fetchProducts = (param) => ({    
    type : ActionTypes.FetchCocktail,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch(param ? "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+param : 
                            "https://www.thecocktaildb.com/api/json/v1/1/random.php", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(responseProducts => {
                    // want to updatePath for the route here:
                    console.log("responseProducts ", responseProducts)
                    resolve(responseProducts)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});


//loading action
export const loading = (showHide) => ({        
    type: ActionTypes.SHOW_LOADING,
    payload: showHide
});
