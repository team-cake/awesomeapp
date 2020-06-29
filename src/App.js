import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";


function App() {
  return (
    <div className="App">
      <main>
      <Title content=`Some simple title` />
      <Pokemon />
      </main>
      <header className="App-header">
        <p>Class #42 is the best!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wait what? Is Codaisseur the best in town?
        </a>
      </header>
    </div>
  );
}

export default App;
