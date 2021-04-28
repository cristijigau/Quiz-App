import React from 'react';

import { Card, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addQuestion, addQuizQuestions } from '../state/actions/';

class AddQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      quiz: 1,
      option: '',
      isCorrect: false,
      answers: [],
    };
  }

  handleQuestionChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleAnswerChange = ({ target: { name, type, checked, value } }) => {
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: inputValue,
    });
  };

  handleQuestionSubmit = e => {
    e.preventDefault();
    const { title, answers, id, quiz } = this.state;
    const {
      questions,
      questions: { length },
    } = this.props;
    const newId = length === 0 ? id + 1 : questions[length - 1].id + 1;
    this.props.addQuestion(newId, title, Number(quiz), answers);
    this.props.addQuizQuestions(Number(quiz), newId);
    this.setState({
      id: newId,
      title: '',
      quiz: 1,
      option: '',
      isCorrect: false,
      answers: [],
    });
  };

  handleAnswerSubmit = e => {
    e.preventDefault();
    const { option, isCorrect } = this.state;
    const answer = {
      option: option,
      isCorrect: isCorrect,
    };
    this.setState(({ answers }) => ({
      option: '',
      isCorrect: false,
      answers: [...answers, answer],
    }));
  };
  render() {
    const { title, option, quiz, isCorrect, answers } = this.state;
    const { quizzes } = this.props;
    return (
      <div className="container-fluid mt-5">
        <div className="row justify-content-center h-100">
          <div className="col-4 align-self-center">
            <Card>
              <Card.Body>
                <Card.Title>Add Questions</Card.Title>
                <form onSubmit={this.handleQuestionSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={this.handleQuestionChange}
                      className="form-control"
                      id="title"
                      aria-describedby="titleHelp"
                    />
                    <small id="titleHelp" className="form-text text-muted">
                      Write your question here.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="quiz">Select Quiz</label>
                    <select
                      name="quiz"
                      value={quiz}
                      onChange={this.handleQuestionChange}
                      className="form-control"
                      id="quiz"
                      aria-describedby="quizHelp"
                    >
                      {quizzes.map(({ id, title }) => (
                        <option key={id} value={id}>
                          {title}
                        </option>
                      ))}
                    </select>
                    <small id="quizHelp" className="form-text text-muted">
                      Select a Quiz to assign the question to.
                    </small>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </form>

                <form onSubmit={this.handleAnswerSubmit}>
                  <div className="form-group">
                    <label htmlFor="option">Answer Option</label>
                    <input
                      type="text"
                      name="option"
                      value={option}
                      onChange={this.handleAnswerChange}
                      className="form-control"
                      id="option"
                      aria-describedby="titleHelp"
                    />
                    <small id="optionHelp" className="form-text text-muted">
                      Write your answer options here
                    </small>
                  </div>
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="isCorrect"
                        onChange={this.handleAnswerChange}
                        checked={isCorrect}
                        className="form-check-input"
                        id="isCorrect"
                      />
                      <label className="form-check-label" htmlFor="isCorrect">
                        Mark as correct
                      </label>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Add Option"
                  />
                </form>
              </Card.Body>
            </Card>
            <Table className="mt-3" striped bordered hover>
              <tbody>
                {answers.map(({ option }, index) => (
                  <tr key={index}>
                    <td>{option}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quizzes, questions }) => ({ quizzes, questions });

const mapDispatchToProps = {
  addQuestion,
  addQuizQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestions);
