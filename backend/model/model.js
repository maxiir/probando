import { Schema, model } from "mongoose";

const Model = new Schema({
    nombre: String,
    telefono: String,
    localidad: String
})

export default model('users',Model)
