import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import css from './dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/state";

export const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.dialogs.map((d, index) => <DialogItem name={d.name} id={d.id} index={index}/>);
    const messagesElements = props.messages.map((m, index) => <Message message={m.message} index={index}/>);

    let newPostElement: React.RefObject<any> = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={css.dialogs}>

            <div className={css.dialogsNames}>
                {dialogsElements}
            </div>

            <div className={css.dialogsMessages}>
                {messagesElements}
                <p>
                    <textarea ref={newPostElement}></textarea>
                </p>
                <p>
                    <button onClick={addPost}>Add message</button>
                </p>
            </div>

        </div>
    )
}