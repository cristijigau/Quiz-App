import React from 'react';

import { Card, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import ViewQuestions from './ViewQuestions';

const ViewQuiz = (props) => {
  const { match: { params: {id}}, quizzes, questions } = props;
  const { title, description, questions: questionIds } = quizzes.find(quiz => quiz.id == id);
  const questionArray = questions.filter(
    question => questionIds.indexOf(question.id) !== -1
  );
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center h-100">
        <div className="col-lg-6 align-self-center">
          <Card bg="info" text="light">
            <Card.Header>{title} </Card.Header>
            <Card.Body>
              <Card.Text>{description}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item variant="info">
                  {questionArray.map((question, index) => (
                    <ViewQuestions key={index} question={question} />
                  ))}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ quizzes, questions }) => ({ quizzes, questions });

export default connect(mapStateToProps)(ViewQuiz);
