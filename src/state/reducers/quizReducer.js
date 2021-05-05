import { ADD_QUIZ_QUESTIONS_TYPE, ADD_QUIZ_TYPE } from '../../constants';

const initialState = [];

const addQuestions = (state, { id, question }) => {
  return state.map(quiz => {
    if (quiz.id === id)
      return {
        ...quiz,
        questions: [...quiz.questions, question],
      };
      return {
        ...quiz,
      };
  });
};

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUIZ_TYPE:
      return [...state, action.payload];
    case ADD_QUIZ_QUESTIONS_TYPE:
      return addQuestions(state, action.payload);
    default:
      return state;
  }
}
