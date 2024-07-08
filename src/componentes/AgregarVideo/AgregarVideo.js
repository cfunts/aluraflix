//import { useState } from "react"
import "./AgregarVideo.css"

const AgregarVideo = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="tituloSection">
        <h3 className="title">Agregar Nuevo Video</h3>
        <img src="/img/desplegar.png" alt="editar" onClick={props.cambiarMostrar} />
    </section>
}

export default AgregarVideo;