import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

const App = () => {
    return (
        <div className="app">

            <Header/>

            <main className={"app-main"}>
                <Navbar/>
                <Profile/>
            </main>

        </div>
    );
}

export default App;
