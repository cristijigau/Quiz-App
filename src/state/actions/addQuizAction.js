import { ADD_QUIZ_TYPE } from '../../constants';

const addQuiz = (id, title, description, questions) => {
  return {
    type: ADD_QUIZ_TYPE,
    payload: {
      id,
      title,
      description,
      questions,
    },
  };
};

export default addQuiz;
