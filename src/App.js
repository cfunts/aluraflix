import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header"
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import AgregarVideo from './componentes/AgregarVideo/AgregarVideo';
import Footer from './componentes/Footer/Footer';
import Categoria from './componentes/Categoria/Categoria';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [videos, actualizarVideos] = useState([])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
 
  //Registrar Video

  const registrarVideo = (video) => {
    console.log("Nuevo video", video)
    //Spread operator
    actualizarVideos([...videos, video])
  }

  //Eliminar video
  const eliminarVideo = (titulo) => {
    console.log("Eliminar video")
    const nuevosVideos = videos.filter((video) => video.titulo !== titulo)
    actualizarVideos(nuevosVideos)
  }

  

  //Lista de categorias
  const categorias = [

    {
      titulocategoria: "FRONTEND",
      colorPrimario: "#82CFFA"
    },
    {
      titulocategoria: "BACKEND",
      colorPrimario: "#57C278"
    },
    {
      titulocategoria: "DATA SCIENCE",
      colorPrimario: "#A6D157"
    },
    {
      titulocategoria: "DEVOPS",
      colorPrimario: "#E06B69"
    },
    {
      titulocategoria: "UX Y DISEÑO",
      colorPrimario: "#DB6EBF"
    },
    {
      titulocategoria: "MÓVIL",
      colorPrimario: "#FFBA05"
    },
    {
      titulocategoria: "INNOVACIÓN Y GESTIÓN",
      colorPrimario: "#FF8A29"
    }
  ]

  return (
    <div className="App">
      <Header/>
      <Banner/>
      {
        mostrarFormulario && <Formulario 
            categorias={categorias.map((categoria) => categoria.titulocategoria)} 
            registrarVideo={registrarVideo}
          />
      }
      
      <AgregarVideo cambiarMostrar={cambiarMostrar}/>
      {
        categorias.map((categoria) => <Categoria 
            datos={categoria} 
            key={categoria.titulo}
            videos={videos.filter(video => video.categoria === categoria.titulocategoria)}
            eliminarVideo={eliminarVideo}
          />
      )
      }

      <Footer/>
    </div>
  );
}

export default App;
