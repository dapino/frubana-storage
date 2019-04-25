import React, { Component } from 'react';
import ProductBox from "../molecules/Product-box";

import '../../styles/components/Sidebar.css'


class ProductList extends Component {

    render() {
        return (
            <div className="Product-list">
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>
                <ProductBox button={"organizar"}/>

            </div>
        )
    }
}

export default ProductList;