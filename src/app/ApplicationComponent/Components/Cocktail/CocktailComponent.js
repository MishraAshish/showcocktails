import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts, addCocktailListToStore, toggleLoading} from "../../../State/Actions";
import CocktailItemComponent from "./CocktailItemComponent";

export default function CocktailComponent(props) {
    //debugger;
    let cocktail = useSelector((state)=>state.cocktail.drinks),
    loading = useSelector((state)=>state.cocktail.loading),
    dispatchActionToFetch = useDispatch(),
    [search, updateSearchValue] = new useState("");

    //let cocktail = cocktailObj ? cocktailObj[0] : undefined;

    let searchTextBox = (evt)=> {
        let typedValue = evt.target.value;
        updateSearchValue(typedValue);
        dispatchActionToFetch(fetchProducts(typedValue));
    }

    //sorting on the basis of Name, Category and Alchoholic
    let sortOnName = (columName)=> {
        dispatchActionToFetch(addCocktailListToStore([]));

        let sortedCocktail = Object.assign(cocktail);;
        
        // sort by column name
        sortedCocktail.sort(function(a, b) {
            var nameA = a[columName].toUpperCase(); // ignore upper and lowercase
            var nameB = b[columName].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
        
            // names must be equal
            return 0;
        });

        dispatchActionToFetch(addCocktailListToStore(sortedCocktail));
        
    }

    useEffect(()=>{ //triggered after first render and then subsequent render
        console.log("useEffect - called", cocktail)
        dispatchActionToFetch(toggleLoading(true));
        !cocktail||(cocktail&&cocktail.length<1) ? dispatchActionToFetch(fetchProducts()) : "";
    }, [])

    console.log("cocktail ", cocktail);

    return(
        <React.Fragment>
            <b><h1>All About <i> Cocktail </i></h1></b>
            
            {loading ? 
            <p>Wait we are fetching your Drinks...</p>:
            <React.Fragment>
            <div>
                <input className={"form-control-search"} name="SearchCocktail" onChange={searchTextBox} value={search} placeholder="Please search the drink of your choice"/>
            </div>
            {cocktail && cocktail.length ? 
            <React.Fragment>
                <table>
                <thead>
                    <tr>
                        <th onClick={()=>sortOnName("strDrink")} style={{cursor:"pointer"}} >Name</th>
                        <th onClick={()=>sortOnName("strCategory")} style={{cursor:"pointer"}}>Category</th>
                        <th>Tag</th>
                        <th onClick={()=>sortOnName("strAlcoholic")} style={{cursor:"pointer"}}>Alcoholic</th>
                        <th>Instructions</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cocktail.map(item=>{
                            return <CocktailItemComponent 
                                            item={item}
                                            key={item.idDrink}
                                />
                        })
                    } 
                </tbody>
                </table>

            </React.Fragment>
            :             
            <div className={"NoItemsMsg"}>
                {"No Items Present to Show"}
            </div>
            }
            </React.Fragment>
            }
        </React.Fragment>
    )
}