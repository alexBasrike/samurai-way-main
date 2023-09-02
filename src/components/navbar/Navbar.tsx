import React from 'react';
import css from './navbar.module.css';

const Navbar = () => {
    return (
        <aside className={css.aside}>
            <nav className={css.nav}>
                <ul>
                    <li><a href="#!">Profile</a></li>
                    <li><a href="#!">Messages</a></li>
                    <li><a href="#!">News</a></li>
                    <li><a href="#!">Music</a></li>
                    <li><a href="#!">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navbar;