import React from 'react';
import css from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {

    const postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 1, message: "It's my first post", likesCount: 11}
    ]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>

        </div>
    );
};

export default MyPosts;