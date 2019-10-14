import React, { Component } from 'react';
import dataExample from '../../services/data-example'
import { connect }  from "react-redux";
import * as actions from "../../actions"
import { bindActionCreators } from 'redux'

import '../../styles/elements/grid.css'
import StoragePage from "./Storage-page";

class StorageContainer extends Component {

    componentDidMount () {
        this.fetchCategories();
    }

    componentDidUpdate () {

    }

    fetchCategories =  () => {
        //TODO: Generar componentes de carga y errores.
        //TODO: Petición a API.
        this.props.actions.setStorageCategories(dataExample)
    }

    render () {
        return (
            <StoragePage/>
        )
    }
}


const mapStateToProps = state => (
    //
    {
        storages: state.getIn(['data', 'storages']),

    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(null, mapDispatchToProps)(StorageContainer);