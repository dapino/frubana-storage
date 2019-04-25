import React, { Component } from 'react';
import Button from "../atoms/Button";

import '../../styles/components/Product-box.css'

class ProductBox extends Component {
    render() {
        return (
            <div className="Product-list__item">
                <h4>Producto</h4>
                <div className="Product-list__item-details">
                    <p><b>Categoría: </b> Perecederos</p>
                    <p><b>Tipo: </b>1</p>
                </div>

                {
                    this.props.button &&
                        <Button text={this.props.button}/>
                }

            </div>
        )
    }
}

export default ProductBox;