const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'How are you'}
    ],

    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Max'}
    ]
};


 const dialogsReducer = (State = initialState, action) => {


     switch (action.type){
         case SEND_MESSAGE:
             let body = action.newMessageBody;
             return {
                 ...State,
                 messages: [...State.messages, {id: 6, message: body}]
             };
         default:
             return State;

     }




}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;