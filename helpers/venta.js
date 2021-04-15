import venta from "../models/venta.js"

const existeVentaById=async(id)=>{
    const existe = await venta.findById(id)

if(!existe) throw new Error(`id no existe ${id}`)
}

const existeseriecomprobante =async(seriecomprobante)=>{
    const existe = await venta.findOne({seriecomprobante:seriecomprobante})
if(existe) throw new Error(`ya existe la serie de la compra`)
}

export {existeseriecomprobante,existeVentaById}