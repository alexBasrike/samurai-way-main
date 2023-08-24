import React from 'react';

const Navbar = () => {
    return (
        <aside className={"app-aside"}>
            <nav className={"app-nav"}>
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