
const Filter = (props) => {

    const searchName = (e) => {
        e.preventDefault();
    }
    const cambioRadio = (e) => {
        const valorRadio = e.target.value;
        props.filterMovimiento(valorRadio);
    }

    return (
        <form className="px-4 mb-4">
            <div className="input-group mb-3 form-inline">
                <input
                    type="text"
                    className="form-control"
                    id="filtroMov"
                    placeholder="busca por el nombre"
                    onSubmit = {searchName}
                    onChange={event => props.filterMovimientoNombre(event.target.value)}
                />
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    onChange ={cambioRadio}
                    value = "Todos"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                    Todos
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    onChange ={cambioRadio}
                    value = "Ingreso"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    Ingresos
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"    
                    onChange ={cambioRadio}
                    value = "Gasto"
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                    Gastos
                </label>
            </div>
        </form>
    )
}

export default Filter