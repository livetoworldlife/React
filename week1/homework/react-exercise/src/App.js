import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hobby from './extreme-hobbies';
import Guarantee from './perfect-customer-service';
import Counter from './counter';
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <article>
          <Hobby />
        </article>
        <article>
          <Counter />
        </article>
      </header>
      <section className="App-section">
        <Guarantee />
      </section>
      <footer>
        <p>Copyright © LiveToWorldLife</p>
      </footer>

    </div>
  );
}

export default App;
