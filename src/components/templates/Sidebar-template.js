import React, {Component, Fragment} from 'react';
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Sidebar from "../organisms/Sidebar";

import '../../styles/components/Template.css'

function SidebarTemplate(props){
    return (
        <Fragment>
            <Navbar/>
            <main>
                <Sidebar/>
                <div className="main-content sidebar-active">
                    {props.children}
                </div>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default SidebarTemplate;