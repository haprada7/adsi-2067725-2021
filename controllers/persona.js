import Persona from "../models/persona.js";

const personaControllers = {

    personaGet: async (req,res)=>{
        const persona =await Persona.find()
    
        res.json({
            persona
        })
    },
    
    personaGetById: async (req,res)=>{
        const {id} =req.params
        const persona = await Persona.findById(id);
    
        res.json({
            persona
        })
    },
    
    personaPost: async (req,res)=>{
        const {tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email}=req.body;
        const persona= Persona({tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email});
       /* if(!tipopersona == "cliente" || !tipopersona == "proveedor" )
        {
            return res.json({
                msg:'por favor escriba cliente para los cliente y proveedor para los proveedores'
            })
        }
        if(!tipodocumento == "cedula" || !tipodocumento == "pasaporte" || !tipodocumento == "nit")
        {
            return res.json({
                msg:'por favor ingrese tipo de documento: cedula - pasaporte - nit'
            })
        }
         */
        persona.save();
        res.json({
            persona
        })
    },
    
        
    personaPut: async (req,res)=>{
        const {id}=req.params
        const {__id,createAt,estado,tipodocumento,numdocumento,__v,email,...resto}=req.body
    
            
        const persona=await Persona.findByIdAndUpdate(id,resto)
        res.json({
            persona
        })
    },
    personaPutActivar: async (req,res)=>{
        const {id}=req.params
        const persona= await Persona.findByIdAndUpdate(id,{estado:1})
        res.json({
            persona
        })
    },
    
    personaPutDesactivar: async (req,res)=>{
        const {id}=req.params
        const persona= await Persona.findByIdAndUpdate(id,{estado:0})
        res.json({
            persona
        })
    }
    
    
    }
    export default personaControllers
