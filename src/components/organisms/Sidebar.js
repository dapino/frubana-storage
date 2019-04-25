import React, { Component } from 'react';
import ProductList from "./Product-list";
import '../../styles/components/Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <ProductList />
            </div>
        )
    }
}

export default Sidebar;