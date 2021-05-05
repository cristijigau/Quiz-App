import React from 'react';

import Answer from './Answer';

const ViewQuestions = (props) => {
  const { answers, title } = props.question;
  return (
    <>
      <h5>{title}</h5>
      {answers.map((answer, index) => (
        <Answer key={index} answer={answer} />
      ))}
    </>
  );
};

export default ViewQuestions;
