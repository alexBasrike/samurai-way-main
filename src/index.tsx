import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

const posts: Array<PostsType> = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 1, message: "It's my first post", likesCount: 11}
]

const dialogs: Array<DialogsType> = [
    {id: 1, name: "Dimych" },
    {id: 2, name: "Andrey" },
    {id: 3, name: "Sveta" },
    {id: 4, name: "Sasha" },
    {id: 5, name: "Viktor" },
    {id: 6, name: "Valera" }
]

const messages: Array<MessagesType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);