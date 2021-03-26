import React from "react";
import "../app.css";
import Header from "../app/CommonComponent/HeaderComponent";
import Footer from "../app/CommonComponent/FooterComponent";
import About from "../app/CommonComponent/AboutComponent";
import NotFound from  "../app/CommonComponent/PageNotFound";
import Cocktail from "./ApplicationComponent/Components/Cocktail/CocktailComponent";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Router>
                    <Header />
                        <Switch>
                            <Route path="/cocktail" exact component={Cocktail} />
                            <Route path="/about" exact component={About} />
                            <Route path="/" exact component={Cocktail} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    <Footer />
                </Router>
            </React.Fragment>
        )
    }
}

export default App;