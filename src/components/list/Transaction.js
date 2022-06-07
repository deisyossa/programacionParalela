import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const Transaction = (props) => {
  return (
    <div>
      <div>
        <p className="my-1">
          <button
            className="btn-noborder btn-eliminar" onClick={() => props.deleteMovimiento(props.todo)}>
            <FaTrash />
          </button>
          <button className="button-edit" onClick={() => props.editMovimiento(props.todo)} >
            <FaEdit />
          </button>
          <span> {props.todo.tipo} {props.todo.nombre}</span>
          <span>   </span>
          <span className={props.todo.tipo==="Ingreso"? "bg-success" : "bg-danger"}> {props.todo.valor}</span>
        </p>
      </div>

    </div >
  )
}

export default Transaction