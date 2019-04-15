import React, { Component } from 'react';
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

class DefaultTemplate extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default DefaultTemplate;