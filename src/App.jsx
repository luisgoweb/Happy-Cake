import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Inicio from "./Views/Inicio"
import Contacto from "./Views/Contacto"
import NotFound from "./Views/NotFound"


function App() {
  

  return (
    <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="*" element={<NotFound/>} />
                
            </Routes>
        </BrowserRouter>
     
       
    </>
  )
}

export default App
