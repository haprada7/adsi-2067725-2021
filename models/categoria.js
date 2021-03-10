import mongoose from 'mongoose';
//tablas = Collection
//campos = property
//registros =documentos
 const CategoriaSchema=mongoose.Schema({
     nombre: {type:String, required:true, maxlength:50, unique:true},
     descripcion: {type:String, maxlength:255},
     estado: {type:Number, default:1},   // 1:activo    0:inactivo
     createAt:{type:Date,default:Date.now}
 })

 export default mongoose.model('Categoria',CategoriaSchema)