import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

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
