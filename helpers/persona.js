import persona from "../models/persona.js"

const existePersonaById=async(id)=>{
    const existe = await persona.findById(id)

    if(!existe){
        throw new Error('el id no existe')
    }
}

const validarTipoPersona=(req,res,next)=>{
    if(!req.persona.tipopersona === "cliente" || !req.persona.tipopersona === "proveedor" )
    {
        return res.json({
            msg:'por favor escriba cliente para los cliente y proveedor para los proveedores'
        })
    }
    next();
}
    const validarTipoDocumento=(req,res,next)=>{
    if(!req.persona.tipodocumento === "cedula" || !req.persona.tipodocumento === "pasaporte" || !req.persona.tipodocumento === "nit")
    {
        return res.json({
            msg:'por favor ingrese tipo de documento: cedula - pasaporte - nit'
        })
    }
    next();
}

export {existePersonaById,validarTipoPersona,validarTipoDocumento}