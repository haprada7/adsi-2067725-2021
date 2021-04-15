import Compra from '../models/compra.js'
import Articulo from '../models/articulo.js'


const compraControllers = {


    compraGet: async(res)=>{
        const compra= await Compra
        .find()
        .populate('persona','nombre')
                
        res.json({
            compra
        })
    },
    
    
    
    compraGetById: async(req,res)=>{
        const {id}=req.params;
        const compra=await Compra
        .findOne({
            _id:id
        })
        
    
        res.json({
            compra
        })
    },
    


    restarStock: async(id,cantidad)=>{
        let {stock}=await Articulo.findById(id);
        stock=parseInt(stock)-parseInt(cantidad)
        await Articulo.findByIdAndUpdate({id},{stock})
        },



         
   incrementarStock: async(id,cantidad)=>{
        let {stock}=await Articulo.findById(id);
        stock=parseInt(stock)+parseInt(cantidad)
        await Articulo.findByIdAndUpdate({id},{stock})
       },


    
    compraPost: async (req,res)=>{
        const {usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,detalle}=req.body
        const compra = new Compra({usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,detalle})
    
        await compra.save();

        detalle.map((articulo)=>AumentarStock(articulo._id,articulo.cantidad))

    
        res.json({
            compra
        })
    },
    
    compraPut: async (req,res)=>{
    const {id}=req.params
    const {_id,createAt,__v,...resto}=req.body
    
    const compra=await Articulo.findByIdAndUpdate(id,resto);
    
    res.json({
        compra
    })
    },
    
  
    
    compraPutActivar: async (req,res)=>{
        const {id}=req.params
        const compra= await compra.findByIdAndUpdate(id,{estado:1})
        detalle.map((articulo)=>restarStock(articulo._id,articulo.cantidad))
        res.json({
            compra
        })
    },
    
    compraPutDesactivar: async (req,res)=>{
        const {id}=req.params
        const compra= await compra.findByIdAndUpdate(id,{estado:0})
        detalle.map((articulo)=>incrementarStock(articulo._id,articulo.cantidad))
        res.json({
            compra
        })
    },
    
    compraDelete: async (req,res)=>{
        const {id}=req.params
        const compra= await compra.findByIdAndDelete(id)
        res.json({
            compra
        })
    
        
    
    }
    
    }
    
    
    
    
    export default compraControllers