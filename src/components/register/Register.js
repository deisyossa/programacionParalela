import { v4 as uuidv4 } from "uuid";


const Register = (props) => {

  const value = props.movimiento;
  const { nombre, tipo, valor } = value;

  const handleChange = ({ target }) => {
    props.setMovimiento({ ...props.movimiento, [target.name]: target.value });
  };

  const registrarMovimiento = (e) => {
    e.preventDefault();
    const registro = { id: uuidv4(), name: props.movimiento, completed: false };
    props.setTodos([...props.todo, registro]);
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    props.setMovimiento(obtenerRegistroVacio)
  }

  const obtenerRegistroVacio = () => {
    return {
      nombre: "",
      tipo: "",
      valor: 0,
    };
  };

  return (
    <div className="col-5 py-3 border border-3 rounded align-self-start">
      <h4 className="mb-5">Registro de Movimientos</h4>
      <form className="row px-3" onSubmit={registrarMovimiento}>
        <div className="col-4">
          <div className="row mb-4">
            <label htmlFor="tipo-movimiento" className="form-label">
              Tipo de Movimiento:
            </label>
          </div>
          <div className="row mb-4">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
          </div>
          <div className="row mb-4">
            <label htmlFor="valor" className="form-label">
              Valor:
            </label>
          </div>
        </div>
        <div className="col-4"></div>
        <div className="col-8">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-plus-circle"></i>
            </span>
            <select
              className="form-select"
              id="tipo-movimiento"
              name="tipo"
              required
              value={tipo}
              onChange={handleChange}
            >
              <option value="">Seleccione un tipo</option>
              <option value='Ingreso'>Ingreso</option>
              <option value='Gasto'>Gasto</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-file-earmark-text-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder="Nombre del movimiento"
              required
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-currency-dollar"></i>
            </span>
            <input
              type="number"
              className="form-control"
              id="valor"
              name="valor"
              value={valor}
              onChange={handleChange}
              placeholder="Valor"
              required
            />
          </div>
        </div>
        <hr className="my-4" />
        <div className="container mb-2">
          <div className="row justify-content-evenly">
            <div className="col-5">
              <button
                className="w-100 btn btn-outline-danger btn-lg"
                type="button"
                onClick={limpiarFormulario}
              >
                Cancelar
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Agregar Movimiento
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register