import Venta from '../models/venta.js'
import Articulo from '../models/articulo.js'


const ventaControllers = {


    ventaGet: async(res)=>{
        const venta= await Venta
        .find()
        .populate('persona','nombre')
                
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


    
    ventaPost: async (req,res)=>{
        const {usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,detalle}=req.body
        const venta = new Venta({usuario,persona,tipocomprobante,seriecomprobante,numcomprobante,impuesto,total,detalle})
    
        await venta.save();

        detalle.map((articulo)=>restarStock(articulo._id,articulo.cantidad))

    
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
        detalle.map((articulo)=>restarStock(articulo._id,articulo.cantidad))
        res.json({
            venta
        })
    },
    
    ventaPutDesactivar: async (req,res)=>{
        const {id}=req.params
        const venta= await venta.findByIdAndUpdate(id,{estado:0})
        detalle.map((articulo)=>incrementarStock(articulo._id,articulo.cantidad))
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