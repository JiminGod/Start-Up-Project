import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../img/logo.png'

const Header = () => {
        return(
            <header id="header">
                <nav>
                    <Link to="/" className="logo"><img src={logo} alt="Logo" style={{width:"70px", position:"fixed"}}/></Link>
                    <ul className="lists">
                        <li><Link to="/">태그1</Link></li>
                        <li><Link to="/">태그2</Link></li>
                        <li><Link to="/MyComponent">대화하러가기</Link></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    </ul>
                </nav>
            </header>
        )
}

export default Header