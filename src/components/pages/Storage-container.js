import React, { Component, Fragment } from 'react';
import StorageSection from "../organisms/Storage-section";
import SidebarTemplate from "../templates/Sidebar-template";
import dataExample from '../../services/data-example'

import '../../styles/elements/grid.css'
import StoragePage from "./Storage-page";

class StorageContainer extends Component {
    constructor (props) {
        super(props);
        //TODO: Generar componentes de carga y errores.
        this.state = {
            data: {
                storages: [],
                products: []
            }
        }

    }

    componentDidMount () {
        this.fetchCategories();
    }

    fetchCategories =  () => {
        //TODO: Generar componentes de carga y errores.
        let storageSections = [];

        let categories = dataExample.filter(item => (
            item.category
        ))
        categories.forEach( (i,k) => {
            storageSections.push( { id: k + 1, titulo: i } )
        })

        this.setState({
            data: {
                storages : storageSections
            }
        })
    }

    render () {
        return (
            <StoragePage storages={this.state.storages}/>
        )
    }
}

export default StorageContainer;