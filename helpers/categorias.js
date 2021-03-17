import categoria from "../models/categoria.js"

const existeCategoriaById=async(id)=>{
    const existe = await categoria.findById(id)

if(!existe) throw new Error(`id no existe ${id}`)
}

const existeCategoriaByNombre =async(nombre)=>{
    const existe = await categoria.findOne({nombre:nombre})
if(existe) throw new Error(`ya existe la categoria con ese nombre`)
}

export {existeCategoriaById,existeCategoriaByNombre}