import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorageContainer from "./pages/Storage-container";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorageContainer} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;