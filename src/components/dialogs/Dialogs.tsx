import React from 'react';
import css from './dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

    const dialogs = [
        {id: 1, name: "Dimych" },
        {id: 2, name: "Andrey" },
        {id: 3, name: "Sveta" },
        {id: 4, name: "Sasha" },
        {id: 5, name: "Viktor" },
        {id: 6, name: "Valera" }
    ]

    const messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ]

    const dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    const messagesElements = messages.map( m => <Message message={m.message}/> );

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsNames}>
                { dialogsElements }
            </div>

            <div className={css.dialogsMessages}>
                { messagesElements }
            </div>

        </div>
    )
}



type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={css.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}



type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={css.item}>{props.message}</div>
    )
}