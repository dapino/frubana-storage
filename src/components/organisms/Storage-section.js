import React, { Component } from 'react';
import ProductBox from "../molecules/Product-box";

import '../../styles/elements/card.css'
import '../../styles/components/Storage.css'


class StorageSection extends Component {
    render() {
        return (
            <div className="Storage-section card col-3 bg-white">
                <h2>{this.props.title}</h2>
                {console.log(this.props)}
                <div className="row row--start">
                    <ProductBox button={false}/>
                </div>
            </div>
        )
    }
}

export default StorageSection;