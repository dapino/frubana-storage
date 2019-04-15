import React, { Component } from 'react';
import ProductBox from "../atoms/Product-box";

class StorageSection extends Component {
    render() {
        return (
            <div className="Storage-section">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
            </div>
        )
    }
}

export default StorageSection;