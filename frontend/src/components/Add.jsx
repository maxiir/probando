import { Formik } from "formik";
import {addData} from '../../API/api.js'

function Find(){
    return(
    <Formik
    initialValues={{
        nombre: "",
        telefono: "",
        localidad: "",
    }}
    OnSubmit={(values) => {
        addData(values);
        }}
    >
        {({ handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="nombre"
            placeholder="nombre"
            onChange={handleChange}
            />
            <input
            type="text"
            name="telefono"
            placeholder="telefono"
            onChange={handleChange}
            />
            <input
            type="text"
            name="localidad"
            placeholder="localidad"
            onChange={handleChange}
            />
            <button type="submit">enviar</button>
        </form>
        )}
    </Formik>
    
    )
}

export default Find;