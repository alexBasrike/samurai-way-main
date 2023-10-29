import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsType, MessagesType, PostsType} from "./index";

type AppPropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app">

                <Header/>

                <main className={"app-main"}>
                    <Navbar/>
                    <div className="app-content">
                        <Route path={"/dialogs"} render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} /> }/>
                        <Route path={"/profile"} render={ () => <Profile posts={props.posts} /> }/>
                        <Route path={"/news"} render={ () => <News /> }/>
                        <Route path={"/music"} render={ () => <Music /> }/>
                        <Route path={"/settings"} render={ () => <Settings /> }/>
                    </div>
                </main>

            </div>
        </BrowserRouter>
    )
}

export default App;
