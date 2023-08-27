import { useState } from 'react'
import './Campo.css'

const Campo = (props) => {

  //Destructuración para agregar el valor de texto por defecto a los inputs
  const { type = "text" } = props

  const [valor, actualizarValor] = useState("")

  // para agregarle el placeholder a cada campo del formulario
  const placeholderModificado = `${props.placeholder}...`

  const menejarCambio = (e) => {
    // recibira todo lo que se escriba en los inputs y lo actualiza en el useState("") y esta actualizar valor viene de Formulario.js
    props.actualizarValor(e.target.value)
  }

  // para agregarle los estilos dependiendo del campo que sea (texto, color)
  return <div className={`campo campo-${type}`}>
    <label> {props.titulo} </label>
    {/* Estos valores vienen de Formulario.js */}
    <input placeholder={placeholderModificado}
    required={props.required}
    value={props.valor}
    onChange={menejarCambio}
    type={type}
    />
  </div>
}

export default Campo
