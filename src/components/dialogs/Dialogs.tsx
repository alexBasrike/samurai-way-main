import React from 'react';
import css from './dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsType, MessagesType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    const messagesElements = props.messages.map( m => <Message message={m.message}/> );

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