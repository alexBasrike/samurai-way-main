import React from 'react';
import css from './post.module.css';

const Post = () => {
    return (
        <div className={css.item}>
            <figure>
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt=""/>
            </figure>

            <p>Post 1</p>

            <div>
                <span>like</span>
            </div>

        </div>
    )
};

export default Post;