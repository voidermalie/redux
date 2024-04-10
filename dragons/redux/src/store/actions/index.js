import {
  DRAGON_ADD,
  DRAGON_DELETE,
  DRAGON_SET_VALUE,
  DRAGON_SET_ERROR,
  KNIGHT_ADD,
  KNIGHT_DELETE,
  KNIGHT_SET_VALUE,
  KNIGHT_SET_ERROR,
} from '../constants/action-type';

export const addDragon = () => ({
  type: DRAGON_ADD,
});

export const setDragonValue = (payload) => ({
  type: DRAGON_SET_VALUE,
  payload,
});

export const setDragonError = (payload) => ({
  type: DRAGON_SET_ERROR,
  payload,
});

export const deleteDragon = (payload) => ({
  type: DRAGON_DELETE,
  payload,
});

export const setKnightValue = (payload) => ({
    type: KNIGHT_SET_VALUE,
    payload,
});

export const addKnight = () => ({
    type: KNIGHT_ADD,
})

export const deleteKnight = (payload) => ({
    type: KNIGHT_DELETE,
    payload,
})

export const setKnightError = (payload) => ({
    type: KNIGHT_SET_ERROR,
    payload
})


