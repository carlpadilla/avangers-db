import React from 'react';
import { Route, NavLink } from 'react-router-dom';
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
          <NavLink exact to='/' activeClassName='activeNavButton'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/avengers' activeClassName='activeNavButton'>
            Avengers
          </NavLink>
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
