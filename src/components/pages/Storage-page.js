import React, { Component, Fragment } from 'react';
import StorageSection from "../organisms/Storage-section";
import SidebarTemplate from "../templates/Sidebar-template";

import '../../styles/elements/grid.css'
import {bindActionCreators} from "redux";
import * as actions from "../../actions";
import {connect} from "react-redux";

class StoragePage extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <SidebarTemplate>
                <h1>Bodega</h1>
                <div className="row">
                    {
                        this.props.storages.map(item => (
                            <StorageSection
                                key={item.id}
                                type={'storageArea'}
                                title={item.title.toUpperCase()}
                                {...item}
                            />
                        ))
                    }
                </div>
            </SidebarTemplate>
        )
    }
}

const mapStateToProps = state => (
    {
        storages: state.getIn(['data', 'storages']),

    }
)

const mapDispatchToProps = dispatch => (
    {
        actions: bindActionCreators(actions, dispatch)
    }
)

export default connect(mapStateToProps)(StoragePage)
