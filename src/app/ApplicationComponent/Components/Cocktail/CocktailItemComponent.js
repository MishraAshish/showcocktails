import React from "react";

let CocktailItemComponent = (props) => {
    let item = props.item;
    return(
        <React.Fragment> 
            <tr>
                <td>{item.strDrink}</td>
                <td>{item.strCategory}</td>
                <td title={item.strTags}>{item.strTags ? item.strTags.substr(0,20) + "...":""}</td>
                <td>{item.strAlcoholic}</td>
                <td title={item.strInstructions}>{item.strInstructions ?item.strInstructions.substr(0,20) + "...":""}</td> 
                <td><img src={item.strDrinkThumb} height="25px" width="100px"></img></td> 
            </tr>
        </React.Fragment>   
    )
}

export default CocktailItemComponent;