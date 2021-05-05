import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AddQuestions, AddQuiz, ViewQuiz, MainPage } from './components';
import Navigation from './components/Navigation';
import { ADD_QUESTIONS, ADD_QUIZ, MAIN_PAGE, VIEW_QUIZ } from './constants';
import store from './state/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path={ADD_QUIZ} component={AddQuiz} />
            <Route path={ADD_QUESTIONS} component={AddQuestions} />
            <Route path={VIEW_QUIZ} component={ViewQuiz} />
            <Route path={MAIN_PAGE} component={MainPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
