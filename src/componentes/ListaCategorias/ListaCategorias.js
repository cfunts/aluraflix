import "./ListaCategorias.css"

const ListaCategorias = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return (
    <section className="contenedorListaCategorias">
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
            {props.categorias.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
        </select>
    </section>
    )
}

export default ListaCategorias;