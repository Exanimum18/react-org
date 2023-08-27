import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

  // Hooks
  // useState - useState()
  // const [nombreVariable, funcionQueActualiza] = useState(valorInicial)

  // const [mostrar, actualizarMostrar] = useState(true)

  // const manejarClick = () => {

  // }

  return <section className="orgSection">
    <h3 className="title"> Mi organización </h3>
    {/* este props.cambiarMostrar viene desde app.js y es para que se muestre el form o lo oculte */}
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
  </section>
}

export default MiOrg
