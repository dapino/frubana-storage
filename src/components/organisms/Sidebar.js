import React, { Component } from 'react';
import '../../styles/Sidebar.css'
import ProductList from "../molecules/Product-list";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <ProductList/>
            </div>
        )
    }
}

export default Sidebar;