import mongoose from 'mongoose';

 const ArticuloSchema=mongoose.Schema({
     categoria:{type:mongoose.Schema.Types.ObjectId,ref:'Categoria',required:true},
     codigo:{type:String, required:true,maxlength:64, unique:true},
     nombre: {type:String, required:true, maxlength:50, unique:true},
     descripcion: {type:String, maxlength:255},
     precioVenta:{type:Number,default:0},
     stock:{type:Number, default:0},
     estado:{type:Number,default:1},
     createAt:{type:Date,default:Date.now}
 })

 export default mongoose.model('Articulo',ArticuloSchema)