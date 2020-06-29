import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div>
      <main>
        <Title content="Some simple title" />
        <Pokemon
          name="Charizard"
          weight="90"
          awesome="yes"
          terrifying="no"
          abilities="Blaze, Solar power, Tough claws, Drought"
        />
        <Pokemon
          name="Bulbasaur"
          weight="6.9"
          awesome="yes"
          terrifying="no"
          abilities="Overgrow, Chlorophyll"
        />
        <Pokemon
          name="Mewtwo"
          weight="112"
          awesome="yes"
          terrifying="yes"
          abilities="Pressure, Unnerve, Steadfast, Insomnia"
        />
                <Pokemon
          name='Mega beedrill'
          weight='65'
          awesome='no'
          terrifying='yes'
          abilities='Intimidate, Unnerve'
        />
      </main>
    </div>
  );
}

export default App;
