import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const Transaction = (props) => {
  
  return (
    <div>
      <div>
        <p className="my-1">
          <button
            className="btn-noborder btn-eliminar" onClick={() => props.deleteMovimiento(props.movimiento)}>
            <FaTrash />
          </button>
          <button className="button-edit" >
            <FaEdit />
          </button>
          <span> {props.todo.tipo} {props.todo.nombre} {props.todo.valor}</span>
        </p>
      </div>

    </div >
  )
}

export default Transaction