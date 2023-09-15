import React from 'react';
import css from './navbar.module.css';

const Navbar = () => {
    return (
        <aside className={css.aside}>
            <nav className={css.nav}>
                <ul>
                    <li className={css.active}><a href="/profile">Profile</a></li>
                    <li><a href="/dialogs">Messages</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/music">Music</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;