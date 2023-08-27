import './Equipo.css'
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

  // Destructuracion
  // Para sacar los dos colores de los equipos
  const { colorPrimario, colorSecundario, titulo, id } = props.datos

  // Para sacar los colaboradores de colaboradores
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props

  const obj = {
    // con esta libreria le podeos agregar opacidad al color de fondo
    backgroundColor: hexToRgba(colorPrimario, 0.3)
  }
  // En react se cambia el "-" de Css por letra mayúscula
  return <>
    {
      // Esto seria para que se muestre el campo del equipo, solo si existe un colaborador de ese equipo
      colaboradores.length > 0 &&
      <section className="equipo" style={obj}>
        {/* para cambiar el color del equipo */}
        <input
          className='input-color'
          type='color'
          value={colorPrimario}
          // para que se haga el cambio de color de los colaboradores
          onChange={(e) => {
            actualizarColor(e.target.value, id)
          }}
        />
        <h3 style={ { borderColor: colorPrimario} }>{titulo}</h3>
        <div className="colaboradores">
        {
          colaboradores.map((colaborador, index) => <Colaborador
              datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              // recibo eliminarColaborador y lo envio a App.js
              eliminarColaborador={eliminarColaborador}
              like={like}
          />)
        }
        </div>
      </section>
    }
    </>
}

export default Equipo
