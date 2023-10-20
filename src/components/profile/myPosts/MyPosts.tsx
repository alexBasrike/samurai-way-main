import React from 'react';
import css from './myPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {

    const posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 1, message: "It's my first post", likesCount: 11}
    ]

    const postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

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
                { postsElements }
            </div>

        </div>
    );
};

export default MyPosts;