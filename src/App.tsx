import React from 'react';
import './App.css';
import {RootStateType} from './redux/state';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {BrowserRouter, Route, Switch} from "react-router-dom";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <Switch>
            <div className="app">

                <Header/>

                <main className={"app-main"}>
                    <Navbar/>
                    <div className="app-content">
                        <Route path={"/dialogs"} render={() => <Dialogs
                            dialogs={props.state.dialogsPage.dialogs}
                            messages={props.state.dialogsPage.messages}
                        />}
                        />
                        <Route path={"/profile"} render={() => <Profile
                            posts={props.state.profilePage.posts}
                            newPostText={props.state.profilePage.newPostText}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}
                        />
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                    </div>
                </main>

            </div>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
