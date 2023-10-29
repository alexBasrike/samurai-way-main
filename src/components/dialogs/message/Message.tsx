import React from 'react';
import css from './../dialogs.module.css';

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={css.item}>{props.message}</div>
    )
}