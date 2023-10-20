import React from 'react';
import css from './dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={css.dialogs}>

            <div className={css.dialogsNames}>
                <DialogItem name={"Dimych"} id={1}/>
                <DialogItem name={"Andrey"} id={2}/>
                <DialogItem name={"Sveta"} id={3}/>
                <DialogItem name={"Sasha"} id={4}/>
                <DialogItem name={"Viktor"} id={5}/>
                <DialogItem name={"Valera"} id={6}/>
            </div>

            <div className={css.dialogsMessages}>
                <Message message={"Hi"}/>
                <Message message={"How is your it-kamasutra?"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
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