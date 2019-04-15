import React, { Component } from 'react';
import FilterItem from "../atoms/Filter-item";

class FilterList extends Component {
    render() {
        return (
            <ul className="Sidebar__list">
                <FilterItem/>
                <FilterItem/>
            </ul>
        )
    }
}

export default FilterList;
