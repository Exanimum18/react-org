import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
  // Destructuración
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color='red' cursor={'pointer'} onClick={() => like(id)} /> : <AiOutlineHeart cursor={'pointer'} onClick={() => like(id)} />}
        </div>
    </div>
}

export default Colaborador
