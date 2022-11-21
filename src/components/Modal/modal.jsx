import React from "react";
import "./modal.css"

export function Modal(props) {
   return (
    <div className="modalStyle">
      <div>
        <h3>Pagamento do {props.users.name}</h3>
        <button>Pagar</button>
        <button onClick={() => { props.setUser([]) }}>Fechar</button>
      </div>
    </div>
  )
}