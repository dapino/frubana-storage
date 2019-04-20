import React, { Component } from 'react';
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Sidebar from "../organisms/Sidebar";

function SidebarTemplate(props){
    return (
        <div>
            <Navbar/>
            <main>
                <Sidebar/>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default SidebarTemplate;