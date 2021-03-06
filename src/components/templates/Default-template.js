import React, { Component } from 'react';
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Sidebar from "../organisms/Sidebar";

function DefaultTemplate(props){
    return (
        <div>
            <Navbar/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default DefaultTemplate;