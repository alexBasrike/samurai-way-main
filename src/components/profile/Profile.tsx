import React from 'react';
import css from './profile.module.css';

const Profile = () => {
    return (
        <div className={css.content}>

            <figure className={css.image}>
                <img src="https://www.americanoceans.org/wp-content/uploads/2023/01/biggest-oceans-1024x576.jpg" alt=""/>
            </figure>

            Main content
        </div>
    );
};

export default Profile;