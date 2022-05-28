
import Filter from './Filter'
import Transaction from './Transaction'

const transactionList = (props) => {
    const deleteMovimiento = (todo) => {
        const newMovimiento = props.todo.filter((mov) => mov.id !== todo.id);
        props.setTodos(newMovimiento);
    }

    return (
        <div className="col-5 py-3 border border-3 rounded">
            <h4 className="d-flex justify-content-between align-items-center">
                <span className="text-primary">Lista de Movimientos</span>
                <span className="badge bg-primary rounded-pill">
                    <Filter movimientos={props} />
                </span>
            </h4>
            <div>
                {props.todo.map((todo) => (
                    <Transaction key={todo.id} todo={todo} deleteMovimiento={deleteMovimiento}></Transaction>
                ))}
            </div>
        </div>

    )
}

export default transactionList