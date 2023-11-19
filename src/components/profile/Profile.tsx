import React from 'react';
import css from './profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "../profileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;