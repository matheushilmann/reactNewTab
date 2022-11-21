import React from "react";
import "./users.css";

export function Users(props) {
  return (
    <div className="users-main">
      <div key={props.id} className="users-list">
        <img className="users-img" src={props.img} alt={props.name} />

        <div className="users-props">
          <p className="users-name">
            {props.name}
          </p>
          <p>
            ID: {props.id} - Username: {props.username}
          </p>
        </div>

      </div>

      <div>
        <button className="button" onClick={props.onClick}>Pagar</button>
      </div>
    </div>
  );
};