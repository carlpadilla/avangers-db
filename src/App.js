import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './component/Home';
import AvengerList from './component/AvengerList';
import AvengerPage from './component/AvengerPage';
// import avengers from './Data';

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
      <Route exact path='/avengers' component={AvengerList} />
      <Route path='/avengers/:id' component={AvengerPage} />
    </div>
  );
}

export default App;
