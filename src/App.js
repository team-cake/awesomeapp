import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div>
      <main>
        <Title content='Some simple title' />
        <Pokemon
          name='Charizard'
          weight='90'
          awesome='yes'
          terrifying='no'
          abilities='Blaze, Solar power, Tough claws, Drought'
        />
      </main>
    </div>
  );
}

export default App;
