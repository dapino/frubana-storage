import React, { Component, Fragment } from 'react';
import StorageSection from "../organisms/Storage-section";
import SidebarTemplate from "../templates/Sidebar-template";
import dataExample from '../../services/data-example'

import '../../styles/elements/grid.css'
import {BrowserRouter as render} from "react-router-dom";

class StoragePage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: [],
            storages: []
        }

    }

    componentDidMount () {
        this.getData()
    }

    getData () {
        //TODO: Generar componentes de carga y errores.
        let storageSections = [];

        let categories = [...new Set(dataExample.map(item => item.category))]
        //TODO: Mejorar la estructura de los datos para no insertar los ids de las categorías acá.
        categories.forEach( (i,k) => {
            storageSections.push( { id: k + 1, name: i } )
        })

        this.setState({
            storages: storageSections
        })
    }

    render () {
        return (
            <SidebarTemplate>
                <h1>Bodega</h1>
                <div className="row">
                    {console.log(this.state)}
                    {
                        this.state.storages.map(item => (
                            <StorageSection
                                key={item.id}
                                type={'storageArea'}
                                title={item.name.toUpperCase()}
                            />
                        ))
                    }
                </div>
            </SidebarTemplate>
        )
    }
}

export default StoragePage;