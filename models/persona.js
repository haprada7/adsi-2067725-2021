import mongoose from 'mongoose';
//tablas = Collection
//campos = property
//registros =documentos
 const PersonaSchema=mongoose.Schema({
     tipopersona:{type:String, required:true, maxlength:20},
     nombre: {type:String, required:true, maxlength:50},
     tipodocumento: {type:String, required:true, maxlength:50},
     numdocumento: {type:Number,required:true, unique:true},
     direccion:{type:String, required:true, maxlength:20},
     telefono: {type:Number,required:true},
     email:{type:String, maxlength:50, unique:true},
     estado:{type:Number,default:1},
     createAt:{type:Date,default:Date.now},
 })

 export default mongoose.model('Persona',PersonaSchema)