import React from 'react';
import css from './post.module.css';

type PostPropsType = {
    message: string
    likes: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={css.item}>
            <figure>
                <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" alt=""/>
            </figure>

            <p>{props.message}</p>

            <div>
                <span>likes - {props.likes}</span>
            </div>

        </div>
    )
};

export default Post;