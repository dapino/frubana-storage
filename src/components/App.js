import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoragePage from "./pages/Storage-page";
import SidebarTemplate from "./templates/Sidebar-template";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StoragePage} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;