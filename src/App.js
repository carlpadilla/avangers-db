import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import AvengerList from './component/AvengerList';
import AvengerPage from './component/AvengerPage';
import avengers from './Data';

import './App.css';

function App() {
  return (
    <div className='App'>
      <ul className='navbar'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/avengers'>Avengers</Link>
        </li>
      </ul>

      <Route exact path='/' component={Home} />
      <Route
        exact
        path='/avengers'
        render={props => <AvengerList {...props} avengers={avengers} />}
      />
      <Route
        path='/avengers/:id'
        render={props => <AvengerPage {...props} avengers={avengers} />}
      />
    </div>
  );
}

export default App;
