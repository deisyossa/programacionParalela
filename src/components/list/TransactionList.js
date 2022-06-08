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

    const updateMov = (id, tipo, nombre, valor) => {
        const newMov = props.todo.map((mov) => mov.id === id ? { id: id, tipo: tipo, nombre: nombre, valor: valor } : mov);
        props.setTodos(newMov);
    }
    const editMovimiento = (edit) => {
        const editMov = props.edit.filter((editar) => editar.id === edit.id);
        props.setEdit(editMov);
        swal
            .fire({
                title: "Editar Movimiento",
                html: `
                    <select class="swal2-input" id="tipo">
                        <option value=${edit.tipo}>${edit.tipo}</option>
                        <option value='Ingreso'>Ingreso</option>
                        <option value='Gasto'>Gasto</option>
                    </select>
                   <input type="text" id="movimiento" class="swal2-input" placeholder="Ingrese movimiento" value=${edit.nombre}>
                   <input type="number" id="ValMove" class="swal2-input" placeholder="Ingrese valor" value=${edit.valor} >`,
                confirmButtonText: "Guardar cambios",
                focusConfirm: false,
                cancelButtonText: "Cancelar",
                showCloseButton: true,
                focusConfirm: false,
                showCancelButton: true,
                preConfirm: () => {
                    const tipo = swal
                        .getPopup()
                        .querySelector("#tipo").value;
                    const movimiento = swal
                        .getPopup()
                        .querySelector("#movimiento").value;
                    const valor = swal.getPopup().querySelector("#ValMove").value;
                    if (!movimiento || !valor || !tipo) {
                        swal.showValidationMessage(`Please enter movimiento and value`);
                    }
                    updateMov(edit.id, tipo, movimiento, valor);
                    return { tipo: tipo, movimiento: movimiento, valor: valor };
                },
            })
            .then((result) => {
                swal.fire(
                    `
                  Se actualizo de manera correcta`.trim()
                );
            });
    };
    const filterMovimiento = (inputValue) => {
        const newFilterMov = props.todo.filter((tipomov) => tipomov.tipo === inputValue);
        props.setTodosFilterList(newFilterMov);
    };

    const filterMovimientoNombre = (inputValue) => {
        const newFilter = props.todo.filter((tipomov) => tipomov.nombre.includes(inputValue));
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
                                <Transaction key={todo.id} todo={todo} deleteMovimiento={deleteMovimiento} editMovimiento={editMovimiento} ></Transaction>
                            ))}
                        </>
                    ) : (
                        <>
                            {props.todo.map((todo) => (
                                <Transaction key={todo.id} todo={todo} deleteMovimiento={deleteMovimiento} editMovimiento={editMovimiento} ></Transaction>
                            ))}
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default transactionList