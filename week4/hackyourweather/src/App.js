import React from 'react';
import { Header } from './components/Header';
import { CityList } from './components/CityList';
import { AddCity } from './components/AddCity';
import { GlobalProvider } from './context/GlobalState';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Charting from './components/Charting';

import './App.css';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <AddCity />
              <CityList />
            </Route>
            <Route path="/:id">
              <Charting />
            </Route>
          </Switch>

        </div>
      </GlobalProvider>
    </Router>

  );
}

export default App;
