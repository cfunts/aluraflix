import './Categoria.css';
import Video from '../Video/Video';

const Categoria = (props) => {

    const {colorPrimario, titulocategoria} = props.datos
    const {videos, eliminarVideo} = props
    const estiloFondo = {
        backgroundColor: colorPrimario
    }
    return <>
        {videos.length > 0 &&
            <section className="contenedorCategoria" >
                <h2 style={estiloFondo}>{titulocategoria}</h2>
                <div className="contenedorVideos">
                        {
                            videos.map((video, index)=><Video 
                            datos={video} 
                            key={index} 
                            estilo={estiloFondo}
                            eliminarVideo={eliminarVideo}
                            />)
                        }
                </div>
            </section>
        }
    </>

}

export default Categoria;