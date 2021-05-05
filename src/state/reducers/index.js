import { combineReducers } from 'redux';

import questionReducer from './questionReducer';
import quizReducer from './quizReducer';

const allReducer = combineReducers({
  questions: questionReducer,
  quizzes: quizReducer,
});

export default allReducer;
