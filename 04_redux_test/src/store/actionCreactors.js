import * as actionType from './constants.js'

export const addAction = num => ({
  type: actionType.ADD_NUM,
  num
});

export const subAction = num => ({
  type: actionType.SUB_NUM,
  num
});

export const incAction = () => ({
  type: actionType.INCREMENT
});

export const decAction = () => ({
  type: actionType.DECREMENT
});