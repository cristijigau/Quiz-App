import { ADD_QUESTION_TYPE } from '../../constants';

const addQuestion = (id, title, quiz, answers) => {
  return {
    type: ADD_QUESTION_TYPE,
    payload: {
      id,
      title,
      quiz,
      answers: [...answers],
    },
  };
};

export default addQuestion;
