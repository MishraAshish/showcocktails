console.log("This is the very first react code setup")
import React from "react";
import {render} from "react-dom";
import store from "./store";

import {Provider} from "react-redux"; // the connector library which will work as provider of store to all components subscribing the store

import App from "./app/app";

render(
    ////wrapping up our application through provider 
    <Provider store={store}> 
        <App />
    </Provider>, //injecting the react application to any container is known as bootstrapping
    document.getElementById("root") //providing the html element in which we need to inject react application
)