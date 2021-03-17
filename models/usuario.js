import mongoose from 'mongoose';
//tablas = Collection
//campos = property
//registros =documentos
 const UsuarioSchema=mongoose.Schema({
     nombre: {type:String, required:true, maxlength:50},
     email:{type:String, maxlength:50, unique:true},
     password:{type:String, required:true},
     rol:{type:String, required:true, maxlength:20},
     //admin_rol    vendedor_rol    almacenista_rol
     estado:{type:Number,default:1},
     createAt:{type:Date,default:Date.now},
 })

 export default mongoose.model('Usuario',UsuarioSchema)