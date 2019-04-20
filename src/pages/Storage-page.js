import React, { Component } from 'react';
import DefaultTemplate from "../components/templates/Default-template";
import Sidebar from "../components/organisms/Sidebar";
import StorageSection from "../components/organisms/Storage-section";

class StoragePage extends Component {
    render() {
        return (
            <StorageSection type={'storageArea'}/>
        )
    }
}

export default StoragePage;