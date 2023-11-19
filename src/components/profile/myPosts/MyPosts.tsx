import React from 'react';
import css from './myPosts.module.css';
import Post from "./post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((p, index) => <Post message={p.message} likesCount={p.likesCount}
                                                              index={index}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost();
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add message</button>
                </div>
            </div>

            <div className={css.posts}>
                {postsElements}
            </div>

        </div>
    );
};

export default MyPosts;