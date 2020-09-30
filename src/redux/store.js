import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _State: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you', likesCount: 20},
                {id: 3, message: 'Hi, how are you?', likesCount: 11},
                {id: 4, message: 'YO', likesCount: 14},
                {id: 5, message: "It's my first post", likesCount: 9}
            ],
            newPostText: 'Kek Wait'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'YO'},
                {id: 5, message: 'How are you'}
            ],

            newMessageBody: '',

            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Masha'},
                {id: 4, name: 'Kirill'},
                {id: 5, name: 'Max'}
            ]
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._State.profilePage = profileReducer(this._State.profilePage, action);
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action);
        this._State.sidebar = sidebarReducer(this._State.sidebar, action);

        this._callSubscriber(this._State);

    }
}




        export default store;
        window.store = store;