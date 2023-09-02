import React from 'react';
import css from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts

            <div>
                <p>
                    <textarea></textarea>
                </p>
                <button>Add message</button>
            </div>

            <div className={css.posts}>
                <Post/>
                <Post/>
            </div>

        </div>
    );
};

export default MyPosts;