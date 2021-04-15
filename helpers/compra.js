import compra from "../models/compra.js"

const existeCompraById=async(id)=>{
    const existe = await compra.findById(id)

if(!existe) throw new Error(`id no existe ${id}`)
}

const existeseriecomprobanteC =async(seriecomprobante)=>{
    const existe = await compra.findOne({seriecomprobante:seriecomprobante})
if(existe) throw new Error(`ya existe la serie de la compra`)
}

export {existeseriecomprobanteC,existeCompraById}