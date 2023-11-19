import React from 'react';
import css from './../dialogs.module.css';

type MessagePropsType = {
    message: string
    index: number
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={css.item} key={props.index}>{props.message}</div>
    )
}