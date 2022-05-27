import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div id="header" className="row my-3 ">
    <div className="col-6" >
      <h2>Taller #1 - Programación Distribuida y Paralela</h2>
    </div>
    <div className="col-1" ></div>
    <div className="col-5">
      <div className="row header">
        <div className="col-6">
          <label htmlFor="saldo-inicial">Saldo inicial:</label>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              id="saldo-inicial"
              type="text"
              value=""
              readOnly
            />
          </div>  
        </div>
        <div className="col-6">
          <label htmlFor="saldo-final">Saldo final:</label>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              id="saldo-final"
              type="text"
              value=""
              readOnly
            />
          </div>  
        </div>
      </div>
  </div>
    </div>
  )
}

export default Header