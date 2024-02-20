import {constants} from '@/constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case constants.IS_LOADING:
            return action.payload;
        default:
            return state;
    }
}
export default loadingReducer