import { DRAGON_ADD, DRAGON_SET_VALUE, DRAGON_SET_ERROR, DRAGON_DELETE } from "../constants/action-type";

const initialState = {
    name: '',
    dragons: [],
    id: 1,
    error: ''
}

const dragonReducer = (state = initialState, action) => {
    switch(action.type) {
        case DRAGON_SET_VALUE:
            return {
                ...state,
                name: action.payload,
                error: ''
            }
        case DRAGON_ADD:
            return {
                ...state,
                dragons: [...state.dragons, {id: state.id, name: state.name}],
                name: '',
                id: state.id +1,
                error: ''

            }
        case DRAGON_SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DRAGON_DELETE:
            return {
                ...state,
                dragons: state.dragons.filter((dragon) => dragon.id !== action.payload)
            }
        default:
            return state;
    }
}

export default dragonReducer;
