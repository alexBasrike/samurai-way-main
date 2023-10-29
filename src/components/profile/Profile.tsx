import React from 'react';
import css from './profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "../profileInfo/ProfileInfo";
import {PostsType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostsType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;