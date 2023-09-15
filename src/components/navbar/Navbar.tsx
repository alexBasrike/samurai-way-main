import React from 'react';
import css from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <aside className={css.aside}>
            <nav className={css.nav}>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={css.active}>Messages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" activeClassName={css.active}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" activeClassName={css.active}>Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;