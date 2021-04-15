import mongoose from 'mongoose';


 const CompraSchema=mongoose.Schema({
     usuario:{type:mongoose.Schema.Types.ObjectId,ref:'Usuario',required:true},
     persona:{type:mongoose.Schema.Types.ObjectId,ref:'Persona',required:true},
     tipocomprobante:{type:String, required:true,maxlength:40, unique:true},
     seriecomprobante:{type:Number,default:0},
     numcomprobante:{type:Number,default:0},
     impuesto:{type:Number,default:0},
     total:{type:Number,default:0},
    detalle:[{
        _id:{type:String, required:true,maxlength:60},
        articulo:{type:String, required:true, maxlength:50},
        cantidad:{type:Number, default:0},
        precio:{type:Number,default:0},
        descuento:{type:Number,default:0}

    }],
     estado:{type:Number,default:1},
     createAt:{type:Date,default:Date.now}
 })

 export default mongoose.model('Compra',CompraSchema)