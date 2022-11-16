const controller = {};
import Modelo from '../model/model.js'

controller.createPeople = async (req,res) => {
    const {nombre,telefono,localidad} = req.body
    const savedata = new Modelo ({nombre:nombre,telefono:telefono,localidad:localidad})
    await savedata.save()
    // const data = req.body
    // console.log(nombre,telefono,localidad)
}

export default controller;