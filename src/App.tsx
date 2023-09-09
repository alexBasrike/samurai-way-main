import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <div className="app">

            <Header/>

            <main className={"app-main"}>
                <Navbar/>
                <div className="app-content">
                    <Dialogs/>
                    {/*<Profile/>*/}
                </div>
            </main>

        </div>
    );
}

export default App;
