import React, { Component } from 'react';
import FilterList from "../molecules/Filter-list";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <FilterList/>
            </div>
        )
    }
}

export default Sidebar;