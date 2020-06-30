import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div>
      <center>
        <main>
          <Title content="Pokemon" />
          <Pokemon
            name="Charizard"
            weight="90"
            awesome="yes"
            terrifying="no"
            abilities={["Blaze", "Solar power", "Tough claws", "Drought"]}
          />
          <Pokemon
            name="Bulbasaur"
            weight="6.9"
            awesome="yes"
            terrifying="no"
            abilities={["Overgrow", "Chlorophyll"]}
          />
          <Pokemon
            name="Mewtwo"
            weight="112"
            awesome="yes"
            terrifying="yes"
            abilities={["Pressure", "Unnerve", "Steadfast", "Insomnia"]}
          />
          <Pokemon
            name="Mega beedrill"
            weight="65"
            awesome="no"
            terrifying="yes"
            abilities={["Intimidate", "Unnerve"]}
          />
        </main>
      </center>
    </div>
  );
}

export default App;
