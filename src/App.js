import { useState } from 'react';
import Header from './components/header/Header';
import Register from './components/register/Register';
import TransactionList from './components/list/TransactionList';


function App() {
  const [movimiento, setMovimiento] = useState({nombre:"",tipo:"",valor:""});
  const [todo, setTodos] = useState([]);
  const [filter, setFilter] = useState("")

  return (
    <div id="modal-container" className="d-grid gap-2">
      <header className="container-fluid pb-1 pt-5">
        <Header></Header>
      </header>
      <section className="container-fluid px-3 mt-5 pt-3">
        <div className="row justify-content-evenly">
          <Register movimiento={movimiento} setMovimiento={setMovimiento} setTodos={setTodos} todo={todo}></Register>
          <TransactionList todo={todo} setTodos={setTodos} filter={filter} setFilter={setFilter}></TransactionList>
        </div>
      </section>
    </div>
  );
}

export default App;
