import React from 'react'


const Transaction = (props) => {
  return (
    <li className="list">
      <div className="">{props.todo.name.tipo}</div>
      <div className="">{props.todo.name.nombre}</div>
      <div className="">{props.todo.name.valor}</div>

    </li>
  )
}

export default Transaction