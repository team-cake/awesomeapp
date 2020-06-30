import React from "react";

export default function Pokemon({
  name,
  weight,
  awesome,
  terrifying,
  abilities,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle">
          {awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p>
          Weight: {weight} kg
          <br />
          Terrifying: {terrifying ? "Very" : "nah, lovable"}
          <br />
          {abilities.length} abilities
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {abilities.map(ability => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}