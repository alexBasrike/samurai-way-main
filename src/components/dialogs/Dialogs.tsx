import React from 'react';
import css from './dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={css.dialogs}>

            <div className={css.dialogsNames}>
                <div className={css.item + ' ' + css.active}>Dimych</div>
                <div className={css.item}>Andrey</div>
                <div className={css.item}>Sveta</div>
                <div className={css.item}>Sasha</div>
                <div className={css.item}>Viktor</div>
                <div className={css.item}>Valera</div>
            </div>

            <div className={css.dialogsMessages}>
                <div className={css.item}>Hi</div>
                <div className={css.item}>How is your it-kamasutra?</div>
                <div className={css.item}>Yo</div>
            </div>

        </div>
    )
}