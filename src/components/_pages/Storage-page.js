import React, { Component } from 'react';
import DefaultTemplate from "../templates/Default-template";
import Sidebar from "../organisms/Sidebar";
import StorageSection from "../organisms/Storage-section";

class Storage extends Component {
    render() {
        return (
            <DefaultTemplate>
                <Sidebar/>
                <StorageSection type={'storageArea'}/>
                <StorageSection type={'categoriesArea'}/>
            </DefaultTemplate>
        )
    }
}

export default Storage;