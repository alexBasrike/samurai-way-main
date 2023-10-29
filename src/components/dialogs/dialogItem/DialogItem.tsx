import React from 'react';
import css from './../dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={css.item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    )
}