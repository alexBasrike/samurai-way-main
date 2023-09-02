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
                <Post message={"Hi, how are you?"} likes={5}/>
                <Post message={"It's my first post"} likes={3}/>
            </div>

        </div>
    );
};

export default MyPosts;