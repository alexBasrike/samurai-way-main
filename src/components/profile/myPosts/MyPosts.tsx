import React from 'react';
import css from './myPosts.module.css';
import Post from "./post/Post";
import {PostsType} from "../../../index";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> );

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