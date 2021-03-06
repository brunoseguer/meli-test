import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBoxContainer from './containers/SearchBoxContainer/index.jsx';
import SearchResultsContainer from './containers/SearchResultsContainer/index.jsx';
import DetailContainer from './containers/DetailContainer/index.jsx';

const App = () => (
  <BrowserRouter>
    <div className="main-app">
      <Route path="/" component={SearchBoxContainer} />
      <Route exact path="/items" component={SearchResultsContainer} />
      <Route exact path="/items/:id" component={DetailContainer} />
    </div>
  </BrowserRouter>
);

export default App;
