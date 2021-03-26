import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props)=>{
    return(
        <React.Fragment>
            <NavLink to="/cocktail" className="button" activeClassName="success" >Cocktails </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
        </React.Fragment>
    )
}

export default Header;