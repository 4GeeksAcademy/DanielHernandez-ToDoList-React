import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import TodoApp from './components/ToDoApp';

/*
// Apuntes -------------------

const animales =[
  {
    nombre: "Tigre",
    imagen: "https://imgs.search.brave.com/yY--PS5F2rUJ6T40GKNf-Oo6ezFYIcyr2ay8PA1yieQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi81LzU0L1Rp/Z3Jlc3NfYXRfSmlt/X0NvcmJldHRfTmF0/aW9uYWxfUGFyay5q/cGcvNTEycHgtVGln/cmVzc19hdF9KaW1f/Q29yYmV0dF9OYXRp/b25hbF9QYXJrLmpw/Zw",
    descripcion:"El tigre (Panthera tigris) es una de las especies[3]​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león, pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño."
  },
  {
    nombre: "Perro",
    imagen:"https://imgs.search.brave.com/QUoq0Gzlh2zjM-nOQjxK3Pcoqlnjz33iE_nK_WMbGX4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/YW1pc3Rvc28tcGVy/cm8tYmFzZW5qaS1p/bnRlbGlnZW50ZS1k/YW5kby1zdS1wYXRh/LWNlcmNhLWFpc2xh/ZG8tYmxhbmNvXzM0/NjI3OC0xNjI2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
    descripcion:"El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie o una subespecie del lobo) es un mamífero carnívoro de la familia de los cánidos, conocido comúnmente como perro doméstico o can. Es un animal de compañía muy popular en todo el mundo, considerado el «mejor amigo del hombre"  
  }
]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home lista={animales}/>
  </React.StrictMode>,
) 
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
)
