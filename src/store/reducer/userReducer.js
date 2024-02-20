import { userActionType } from '../../constants';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case userActionType.FETCH_USERS:
            return action.payload;
        case userActionType.FETCH_USER:
            return action.payload;
        case userActionType.ADD_USER:
            return action.payload;
        case userActionType.UPDATE_USER:
            return action.payload;
        case userActionType.DELETE_USER:
            return action.payload;
        default:
            return state;
    }
};
export default userReducer