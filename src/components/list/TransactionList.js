
import Filter from './Filter'
import Transaction from './Transaction'

const transactionList = (props) => {
   
    return (
        <div className="col-5 py-3 border border-3 rounded">
            <h4 className="d-flex justify-content-between align-items-center mb-5">
                <span className="text-primary">Lista de Movimientos</span>
                <span className="badge bg-primary rounded-pill">
                    <Filter movimientos={props} />
                </span>
            </h4>
            <div>
                {props.todo.map((todo) => (
                    <Transaction key={todo.id} todo={todo}></Transaction>
                ))}
            </div>
        </div>

    )
}

export default transactionList