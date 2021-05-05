import React, { Component } from 'react';

export default class Answer extends Component {
  render() {
    const { option } = this.props.answer;
    return (
      <>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="answer" />
          <label className="form-check-label" htmlFor="answer">
            {option}
          </label>
        </div>
      </>
    );
  }
}
