import { KNIGHT_ADD, KNIGHT_DELETE, KNIGHT_SET_ERROR, KNIGHT_SET_VALUE } from "../constants/action-type";

const initialState = {
    knights: [],
    knightName: '',
    knightError: '',
    knightId: 1
}

const knightReducer = (state = initialState, action) => {
    switch(action.type) {
        case KNIGHT_SET_VALUE:
            return {
                ...state,
                knightName: action.payload,
                knightError: ''
            }
        case KNIGHT_ADD:
            return {
                ...state,
                knights: [...state.knights, {knightId: state.knightId +1, knightName: state.knightName}],
                knightName: '',
                knightError: '',
                knightId: state.knightId +1
            }
        case KNIGHT_DELETE:
            return {
                ...state,
                knights: state.knights.filter((knight) => knight.knightId !== action.payload)
            }
        case KNIGHT_SET_ERROR:
            return {
                ...state,
                knightError: action.payload
            }
        default:
            return state;
    }
}

export default knightReducer;
