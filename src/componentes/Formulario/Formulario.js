import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaCategorias from "../ListaCategorias/ListaCategorias";
import Boton from "../Boton/Boton";


const Formulario = (props) => {


    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const {registrarVideo} =props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }
        registrarVideo(datosAEnviar)
    }

    return (
    <section className="contenedorFormulario">
        <form onSubmit={manejarEnvio}>
            <div className="contenedorTituloPrincipal">
                <h2>NUEVO VIDEO</h2>
                <p>COMPLETE EL FORMULARIO PARA CREAR UN NUEVO VIDEO</p>
            </div>
            <div className="contenedorCampos">

                <div className="contenedorSubtitulo">
                    <h2 className="tituloFormulario">Crear Tarjeta</h2>
                </div>
                <div className="contenedorTituloYCategoria">
                    <CampoTexto
                        titulo="Título"
                        placeholder="Ingresar título"
                        required
                        valor={titulo}
                        actualizarValor={actualizarTitulo}
                    />
                    <ListaCategorias
                        valor={categoria}
                        actualizarEquipo={actualizarCategoria}
                        categorias={props.categorias}
                    />
                </div>
                <div className="contenedorImagenYVideo">
                    <CampoTexto
                        titulo="Imagen"
                        placeholder="Ingresar imagen"
                        required
                        valor={imagen}
                        actualizarValor={actualizarImagen}
                    />
                    <CampoTexto
                        titulo="Video"
                        placeholder="Ingresar video"
                        required
                        valor={video}
                        actualizarValor={actualizarVideo}
                    />
                </div>
               
                <div className="contenedorDescripción">
                    <CampoTexto
                        titulo="Descripción"
                        placeholder="Ingresar descripción"
                        required
                        valor={descripcion}
                        actualizarValor={actualizarDescripcion}
                    />
                </div>
                <div className="contenedorBotones">
                    <Boton>GUARDAR</Boton>
                    <Boton>LIMPIAR</Boton>
                </div>

            </div>

        </form>
    </section>
)
}

export default Formulario;