import { ADD_QUIZ_QUESTIONS_TYPE } from '../../constants';

const addQuizQuestions = (id, question) => {
  return {
    type: ADD_QUIZ_QUESTIONS_TYPE,
    payload: {
      id, // quiz
      question, // id
    },
  };
};

export default addQuizQuestions;
