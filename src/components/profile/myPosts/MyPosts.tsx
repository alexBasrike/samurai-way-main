import React from 'react';
import css from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add message</button>
                </div>
            </div>

            <div className={css.posts}>
                <Post message={"Hi, how are you?"} likesCount={5}/>
                <Post message={"It's my first post"} likesCount={3}/>
            </div>

        </div>
    );
};

export default MyPosts;