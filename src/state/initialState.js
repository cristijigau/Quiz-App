const initialState = {
  questions: [
    {
      id: 1,
      title: 'What is my name?',
      quiz: 1,
      answers: [
        {
          option: 'Elon Musk',
          isCorrect: false,
        },
        {
          option: 'Mark Zuckerberg',
          isCorrect: false,
        },
        {
          option: 'Cristian Jigau',
          isCorrect: true,
        },
      ],
    },
    {
      id: 2,
      title: 'What is the weather like in Chisinau?',
      quiz: 1,
      answers: [
        {
          option: 'Nice',
          isCorrect: false,
        },
        {
          option: 'Very nice',
          isCorrect: true,
        },
        {
          option: 'Awesome',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: 'How old am I?',
      quiz: 1,
      answers: [
        {
          option: '12',
          isCorrect: false,
        },
        {
          option: '2',
          isCorrect: false,
        },
        {
          option: '22',
          isCorrect: true,
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 1,
      title: 'Quiz 1',
      description:
        'This is Quiz nr.1. It is a demo quiz, to test the app\'s features. It has 3 questions by default',
      questions: [1, 2, 3],
    },
  ],
};

export default initialState;
