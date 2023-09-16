import React from 'react';
import css from "./profileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <figure className={css.image}>
                <img src="https://www.americanoceans.org/wp-content/uploads/2023/01/biggest-oceans-1024x576.jpg" alt=""/>
            </figure>

            <div className={css.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;