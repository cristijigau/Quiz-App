import { ADD_QUESTION_TYPE } from '../../constants';

const initialState = [];

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION_TYPE:
      return [...state, action.payload];
    default:
      return state;
  }
}
