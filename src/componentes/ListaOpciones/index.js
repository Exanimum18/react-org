import './ListaOpciones.css'

const ListaOpciones = (props) => {

  // Metodo map
  // const equipos = [
  //   "Programación",
  //   "Front End",
  //   "Data Science",
  //   "Devops",
  //   "UX y Diseño",
  //   "Móvil",
  //   "Innovación y Gestión"
  // ]

  const manejarCambio = (e) => {
    // Este actualizar equipo es el que viene desde Formulario.js
    props.actualizarEquipo(e.target.value)
  }

  return <div className='lista-opciones'>
    <label> Equipos </label>
    <select value={props.valor} onChange={manejarCambio}>

      {/* estas propiedades son para que aparezca el seleccionar equipo sin que sea una opcion a elegir y quede como un placeholder */}
      <option value="" disabled defaultValue="" hidden>Selecccionar equipo</option>
      {/* <option> Programación </option>
      <option> Front End </option>
      <option> Data Science </option>
      <option> UX y Diseño </option>
      <option> Programación </option>
      <option> Móvil </option>
      <option> Innovación y Gestión </option> */}

      {/* { equipos.map( (equipo, index) => {
        return <option key={index}>
          {equipo}
        </option>
      }) } */}

      { /* la key es el id unico de cada equipo */ }
      { props.equipos.map( (equipo, index) => <option key={index} value={equipo}> {equipo} </option>) }

    </select>
  </div>
}

export default ListaOpciones
