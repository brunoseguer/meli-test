import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './containers/layout.jsx';
import ItemDetail from './components/Detail/index.jsx';
// import logo from './logo.svg';
// import './App.css';

// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   </div>
// );

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/items/" component={Layout} />
      <Route path="/items/:id" component={ItemDetail} />
    </div>
  </BrowserRouter>
);

export default App;
