import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to="/"><img src={logo} alt="Logo" /></Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/MyComponent">1</Link>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header