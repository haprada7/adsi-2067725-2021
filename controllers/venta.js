import Venta from '../models/venta.js'


const ventaControllers = {


    ventaGet: async(req,res)=>{
        const venta= await Venta
        .find()
        .populate('categoria','nombre')
                
        res.json({
            venta
        })
    },
    
    
    
    ventaGetById: async(req,res)=>{
        const {id}=req.params;
        const venta=await Venta
        .findOne({
            _id:id
        })
        
    
        res.json({
            venta
        })
    },
    
    
    
    ventaPost: async (req,res)=>{
        const {usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,...detalle}=req.body
        const venta = new Venta({usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,...detalle})
    
        await venta.save();
    
        res.json({
            venta
        })
    },
    
    ventaPut: async (req,res)=>{
    const {id}=req.params
    const {_id,createAt,__v,...resto}=req.body
    
    const venta=await Articulo.findByIdAndUpdate(id,resto);
    
    res.json({
        venta
    })
    },
    
  
    
    ventaPutActivar: async (req,res)=>{
        const {id}=req.params
        const venta= await venta.findByIdAndUpdate(id,{estado:1})
        res.json({
            venta
        })
    },
    
    ventaPutDesactivar: async (req,res)=>{
        const {id}=req.params
        const venta= await venta.findByIdAndUpdate(id,{estado:0})
        res.json({
            venta
        })
    },
    
    ventaDelete: async (req,res)=>{
        const {id}=req.params
        const venta= await venta.findByIdAndDelete(id)
        res.json({
            venta
        })
    
    
    }
    
    }
    
    
    
    
    export default ventaControllers