import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState =
    {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How are you', likesCount: 20},
            {id: 3, message: 'Hi, how are you?', likesCount: 11},
            {id: 4, message: 'YO', likesCount: 14},
            {id: 5, message: "It's my first post", likesCount: 9}
        ],
        profile: null,
        status: ''

    };


const profileReducer = (State = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...State,
                posts: [...State.posts, newPost],
                newPostText: ''
            };


        case SET_USER_PROFILE:
            return {
                ...State, profile: action.profile
            };
        case SET_STATUS:
            return {
                ...State, status: action.status
            }
        case DELETE_POST:
            return {...State, posts: State.posts.filter(p => p.id != action.postId)}
        default:
            return State;
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})


export const getUserProfile = (userId) => async (dispatch) => {

    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}


export default profileReducer;