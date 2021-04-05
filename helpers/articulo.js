import articulo from "../models/articulo.js"

const existeArticuloById=async(id)=>{
    const existe = await articulo.findById(id)

if(!existe) throw new Error(`id no existe ${id}`)
}

const existeArticuloByNombre =async(nombre)=>{
    const existe = await articulo.findOne({nombre:nombre})
if(existe) throw new Error(`ya existe el articulo con ese nombre`)
}

export {existeArticuloById,existeArticuloByNombre}