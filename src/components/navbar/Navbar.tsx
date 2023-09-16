import React from 'react';
import css from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <aside className={css.aside}>
            <nav className={css.nav}>
                <ul>
                    <li>
                        <NavLink exact to="/profile" activeClassName={css.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/dialogs" activeClassName={css.active}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/news" activeClassName={css.active}>News</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/music" activeClassName={css.active}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/settings" activeClassName={css.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;