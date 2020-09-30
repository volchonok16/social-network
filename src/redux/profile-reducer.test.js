import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How are you', likesCount: 20},
            {id: 3, message: 'Hi, how are you?', likesCount: 11},
            {id: 4, message: 'YO', likesCount: 14},
            {id: 5, message: "It's my first post", likesCount: 9}
        ]
    };

test('length should be incremented', () => {
    let action = addPostActionCreator('kek wait ');
    let state =
        {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you', likesCount: 20},
                {id: 3, message: 'Hi, how are you?', likesCount: 11},
                {id: 4, message: 'YO', likesCount: 14},
                {id: 5, message: "It's my first post", likesCount: 9}
            ]
        };

    let newState = profileReducer(state, action);

  expect (newState.posts.length).toBe(6);
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('kek wait ');


    let newState = profileReducer(state, action);

  expect (newState.posts[5].message).toBe('kek wait');
});

test('length of after deleting length of messages should be decrement', () => {
    let action = deletePost(1);


    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(4);
});

test(`length of after deleting length shoudnt't be decrement if id is incorrect`, () => {
    let action = deletePost(1);


    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(4);
});

