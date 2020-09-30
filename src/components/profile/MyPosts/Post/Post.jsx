import React from "react";
import s from './Post.module.css'

const Post = (props) => {


    return (
        <div className={s.item}>
            <img
                src='https://author.today/content/2020/07/08/3b12f0f0d4c34a75aa0eb831554a06cd.jpg?width=265&height=400&mode=max'/>
            {props.message}

            <div>
                <span> likes {props.likesCount}  </span>
            </div>
        </div>
    );
}
export default Post;