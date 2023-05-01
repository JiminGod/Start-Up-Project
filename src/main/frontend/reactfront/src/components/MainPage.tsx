import React from "react";
import Header from './Header';
import Footer from './Footer';
import './MainPage.css';
import Inner1 from "./inners/inner1";
import Inner2 from "./inners/inner2";
import Inner3 from "./inners/inner3";

class MainPage extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="outer">
                    <Inner1/>
                    <Inner2/>
                    <Inner3/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;