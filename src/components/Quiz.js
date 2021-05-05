import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      quiz: { id, title, description },
    } = this.props;
    return (
      <>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <Link to={`/quiz/${id}`}>View Quiz</Link>
        </td>
      </>
    );
  }
}
