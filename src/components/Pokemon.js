import React from "react";

export default function Pokemon({
  name,
  weight,
  awesome,
  terrifying,
  abilities,
}) {
  return (
    <div>
      <h2>Pokemon name: {name}</h2>
      <p>Weight: {weight} kg</p>
      <p>Awesome: {awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities: {abilities}</p>
    </div>
  );
}
