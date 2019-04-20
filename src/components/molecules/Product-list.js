import React, { Component } from 'react';
import ProductBox from "../atoms/Product-box";

class ProductList extends Component {
    render() {
        return (
            <div className="Product-box">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
            </div>
        )
    }
}

export default ProductList;