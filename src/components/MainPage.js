import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

import Quiz from './Quiz';

class MainPage extends Component {
  render() {
    const { quizzes } = this.props;
    return (
      <Table className="mt-4" striped hover>
        <thead>
          <tr>
            <th>Available Quizzes</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map(quiz => (
            <tr key={quiz.id}>
              <Quiz quiz={quiz} />
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = ({ quizzes }) => ({ quizzes });

export default connect(mapStateToProps)(MainPage);
