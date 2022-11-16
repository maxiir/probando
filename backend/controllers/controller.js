const controller = {};
import Modelo from '../model/model.js'

controller.createPeople = async (req,res) => {
    const {nombre,telefono,localidad} = req.body
    const savedata = new Modelo ({nombre:nombre,telefono:telefono,localidad:localidad})
    await savedata.save()
    
}

controller.getPeople = async (req,res) =>{
    
    const {id} = req.params
    const getdata = await Modelo.findById(id)
    console.log(getdata)
    
}


export default controller;


// save() --> guardar datos en ddbb
// find() o findById(el id)--> busca en ddbb por id
// updateOne({_id: el id},{campos}) --> actualiza datos por id
// remove({_id: el id}) --> eliminar datos de ddbb por id