import React from "react";
import Header from './Header';
import Footer from './Footer';

class MainPage extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <main>
                    <h1>테스트</h1>
                    <p>입니다.</p>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default MainPage;