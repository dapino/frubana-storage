import React, { Component } from 'react';
import '../../styles/components/Navbar.css'


class Navbar extends Component {
    render() {
        return (
            <header className="Navbar Navbar--fixed">
                <a href="https://www.frubana.com/home" className="Navbar__logo">
                    <img src="https://www.frubana.com/images/logo-horizontal-sin-slogan.png"   alt="Frubana logo"/>
                </a>
            </header>
        )
    }
}

export default Navbar;