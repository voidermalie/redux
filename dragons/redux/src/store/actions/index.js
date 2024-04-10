import { DRAGON_ADD, DRAGON_DELETE, DRAGON_SET_VALUE, DRAGON_SET_ERROR } from "../constants/action-type";

export const addDragon = () => ({
    type: DRAGON_ADD
})

export const setDragonValue = (payload) => ({
    type: DRAGON_SET_VALUE,
    payload
})

export const setDragonError = (payload) => ({
    type: DRAGON_SET_ERROR,
    payload
})

export const deleteDragon = (payload) => ({
    type: DRAGON_DELETE,
    payload
})
