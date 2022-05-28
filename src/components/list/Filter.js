const Filter = (props) => {
    return (
        <form className="px-4 mb-4">
            <div className="input-group mb-3 form-inline">
                <input
                    type="text"
                    className="form-control"
                    id="filtroMov"
                    placeholder="busca por el nombre"
                />
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
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

                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                    Gastos
                </label>
            </div>
        </form>
    )
}

export default Filter