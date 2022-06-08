import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Register from './components/register/Register';
import TransactionList from './components/list/TransactionList';
import swal from 'sweetalert';

function App() {
  const [movimiento, setMovimiento] = useState({ nombre: "", tipo: "", valor: 0 });
  const [todo, setTodos] = useState([]);
  const [todoFilterList, setTodosFilterList] = useState([]);
  const [tipo, setTipo] = useState(0);
  const [saldoInicial, setSaldoInicial] = useState(10000000);
  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);
  const [edit, setEdit] = useState([]);

  const convertir = (numero) => {
    return parseInt(numero);
  }
  const nuevosaldo = (registro) => {
    if (registro.tipo === "Gasto") {
      if (saldoFinal < registro.valor) {
        swal({
          title: "Error",
          text: "No se tiene saldo suficiente para este gasto",
          icon: "error",
          button: "Aceptar"
        })
      } else {
        swal({
          title: "Registro Exitoso",
          text: "El Gasto fue agregado con éxito.",
          icon: "success",
          button: "Aceptar"
        })
        setTodos([...todo, registro])
      }
    } else {
      swal({
        title: "Registro Exitoso",
        text: "El Ingreso fue agregado con éxito.",
        icon: "success",
        button: "Aceptar"
      })
      setTodos([...todo, registro])
      let ingresos = obtenerTotal(todo, 'Ingreso');
      let gastos = obtenerTotal(todo, 'Gasto');
      if (registro.tipo === 'Ingreso') {
        ingresos += convertir(registro.valor)
      } else {
        gastos += convertir(registro.valor)
      }
      const saldoTotal = convertir(saldoInicial + (ingresos - gastos));
      setSaldoFinal(saldoTotal);
    }
  }

  const obtenerTotal = (todo, tipo) => {
    return todo
      .filter((mov) => mov.tipo === tipo)
      .map((mov) => convertir(mov.valor))
      .reduce((total, ingreso) => (total += ingreso), 0);
  };

  const actualizarSaldo = (valor) => {
    valor = convertir(valor);
    setSaldoInicial(valor);
  }

  useEffect(() => {
    let ingresos = obtenerTotal(todo, 'Ingreso');
    let gastos = obtenerTotal(todo, 'Gasto');
    const saldoTotal = convertir(saldoInicial + (ingresos - gastos));
    setSaldoFinal(saldoTotal);
  }, [todo,saldoInicial])
  
  
  return (
    <div id="modal-container" className="d-grid gap-2">
      <header className="container-fluid pb-1 pt-5">
        <Header actualizarSaldo={actualizarSaldo} saldoFinal={saldoFinal} saldoInicial={saldoInicial}></Header>
      </header>
      <section className="container-fluid px-3 mt-5 pt-3">
        <div className="row justify-content-evenly">
          <Register nuevosaldo={nuevosaldo} movimiento={movimiento} setMovimiento={setMovimiento} ></Register>
          <TransactionList todo={todo} setTodos={setTodos} todoFilterList={todoFilterList} setTodosFilterList={setTodosFilterList} tipo={tipo} setTipo={setTipo} edit={edit}setEdit={setEdit}></TransactionList>
        </div>
      </section>
    </div>
  );
}

export default App;
