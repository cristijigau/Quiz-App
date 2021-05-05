import React from 'react';

import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

import { addQuiz } from '../state/actions';

class AddQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      description: '',
      questions: [],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, title, description, questions } = this.state;
    const {
      quizzes,
      quizzes: { length },
    } = this.props;
    const newId = length === 0 ? id + 1 : quizzes[length - 1].id + 1;
    this.props.addQuiz(newId, title, description, questions);
    this.setState({
      id: newId,
      title: '',
      description: '',
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <div className="container-fluid h-75">
        <div className="row justify-content-center h-100">
          <div className="col-4 align-self-center">
            <Card>
              <Card.Body>
                <Card.Title>Add Quiz</Card.Title>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={this.handleChange}
                      className="form-control"
                      id="title"
                      aria-describedby="titleHelp"
                    />
                    <small id="titleHelp" className="form-text text-muted">
                      Write a title for your quiz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Add Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows="3"
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                      placeholder="description..."
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quizzes }) => ({ quizzes });

export default connect(mapStateToProps, { addQuiz })(AddQuiz);
