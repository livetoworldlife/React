import React from 'react';
import NewFriend from './components/NewFriend';
import DogPhoto from './components/DogPhoto';
import JokeGenerator from './components/JokeGenerator';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article>
          <NewFriend />
        </article>
        <article>
          <JokeGenerator />
        </article>
      </header>
      <section>
        <DogPhoto />
      </section>
      <footer>
        <p>Copyright © LiveToWorldLife</p>
      </footer>
    </div>
  );
}

export default App;
