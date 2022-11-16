import {Formik} from 'formik'
import { getData } from '../../API/api.js'

function Find() {
  return (
    <Formik initialValues={{
        id:''
    }}
    onSubmit={async({id})=>{
        await getData(id)
    }}>
        {({handleChange,handleSubmit})=>(
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name='id' placeholder='id:' />
                <button type='submit'>buscar</button>
            </form>
        )}

    </Formik>
  )
}

export default Find