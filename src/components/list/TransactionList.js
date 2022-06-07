import Filter from './Filter'
import Transaction from './Transaction'
import swal from 'sweetalert2'


const transactionList = (props) => {

    const inputVal = props.edit;
    const { tipo, nombre, valor } = inputVal;

    const deleteMovimiento = (todo) => {
        const newMovimiento = props.todo.filter((mov) => mov.id !== todo.id);
        props.setTodos(newMovimiento);
    };

    const editMovimiento = (edit) => {
        const editMov = props.edit.filter((editar) => editar.id === edit.id);
        const handleChange = ({ target }) => {
            props.setMovimiento({ ...inputVal, [target.name]: target.inputVal });
        };
        const actualizar = (e) => {
            e.preventDefault();
            //const newVal = inputVal.map((newValue) => newValue.id === {tipo, nombre, valor} , newValue);
        };
        props.setEdit(editMov);
        swal.fire({
            title: 'Editar Movimiento',
            html:
                `
                <form>
                    <select class="swal2-select">
                        <option value=${edit.tipo}>${edit.tipo}</option>
                        <option value='Ingreso'>Ingreso</option>
                        <option value='Gasto'>Gasto</option>
                    </select>
                    <input type="text" id="movimiento" class="swal2-input" placeholder="Ingrese movimiento" value=${edit.nombre}>
                    <input type="number" class="swal2-input" placeholder="Ingrese valor" value=${edit.valor}>
                </form>
                `,
            confirmButtonText: 'Guardar cambios',
            cancelButtonText: 'Cancelar',
            showCloseButton: true,
            focusConfirm: false,
            showCancelButton: true
        });
        //props.nuevosaldo(registro); 
        console.log(edit);

    };
    const filterMovimiento = (inputValue) => {
        const newFilterMov = props.todo.filter((tipomov) => tipomov.tipo === inputValue);
        props.setTodosFilterList(newFilterMov);
    };

    const filterMovimientoNombre = (inputValue) => {
        const newFilter = props.todo.filter((tipomov) => tipomov.nombre === inputValue);
        props.setTodosFilterList(newFilter);
    };

    return (
        <div className="col-5 py-3 border border-3 rounded">
            <h4 className="d-flex justify-content-between align-items-center">
                <span className="text-primary">Lista de Movimientos</span>
                <div className="count">Cantidad: {props.todo.length}</div>
                <span className="badge bg-primary rounded-pill">
                    <Filter movimientos={props} filterMovimientoNombre={filterMovimientoNombre} filterMovimiento={filterMovimiento} />
                </span>
            </h4>
            <div>
                {
                    props.todoFilterList.length > 0 ? (
                        <>
                            {props.todoFilterList.map((todo) => (
                                <Transaction key={todo.id} todo={todo} deleteMovimiento={deleteMovimiento} editMovimiento={editMovimiento}></Transaction>
                            ))}
                        </>
                    ) : (
                        <>
                            {props.todo.map((todo) => (
                                <Transaction key={todo.id} todo={todo} deleteMovimiento={deleteMovimiento} editMovimiento={editMovimiento}></Transaction>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default transactionList