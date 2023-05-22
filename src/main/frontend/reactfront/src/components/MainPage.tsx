import React from "react";
import Header from './Header';
import Footer from './Footer';
import './MainPage.css';
import Simple from "./inners/Simple";
import Detail from "./inners/Detail";
import Sitefunc from "./inners/Sitefunc";
import Profilechara from "./inners/Profilechara";
const MainPage = () =>  {
    return(
            <div>
                <Header/>
                <div className="outer">
                    <Simple/>
                    <Detail/>
                    <Sitefunc/>
                    <Profilechara/>
                </div>
                <Footer/>
            </div>
        );
}

export default MainPage;