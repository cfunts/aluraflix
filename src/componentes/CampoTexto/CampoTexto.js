import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return(
        <section className="contenedorCampoTexto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
        </section>
    )
}
export default CampoTexto;