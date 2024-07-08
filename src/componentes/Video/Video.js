import "./Video.css"

const Video = (props) => {
    const {titulo,imagen,video}=props.datos
    const {backgroundColor}=props.estilo
    const {eliminarVideo}=props
    const estiloF = {
        backgroundColor: backgroundColor
    }
    return (
        <div className="contenedorVideo" style={estiloF}>
            <a href={video}><img className="videoImg" src={imagen} alt={titulo}/></a>
            <section className="contenedorInteraccionVideo" >
                <div className="contenedorIconos" >
                    <img src="./img/eliminar.png" alt="Icono de eliminar" onClick={()=>eliminarVideo(titulo)}></img>
                    ELIMINAR
                </div>
                <div className="contenedorIconos">
                    <img src="./img/editar.png" alt="Icono de editar"></img>
                    EDITAR
                </div>
            </section>
        </div>
    )
}

export default Video;