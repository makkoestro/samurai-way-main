import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <main
                className={'app-wrapper-main'}>     {/*что бы применялись повторяющиеся стили вне зависимости от контента*/}
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
            </main>
        </div>
    );
}

export default App;
