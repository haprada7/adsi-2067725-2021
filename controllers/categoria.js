import Categoria from "../models/categoria.js"

const categoriasControllers = {


categoriaGet: async(req,res)=>{
    const value=req.query.value;
    const categoria=await Categoria
    .find({
        $or:[
            {nombre: new RegExp(value,'i')},
            {descripcion:new RegExp(value,'i')}
        ]
    })
    .sort({'nombre':-1})

    res.json({
        categoria
    })
},



categoriaGetById: async(req,res)=>{
    const {id}=req.params;
    const categoria=await Categoria
    .findOne({
        _id:id
    })
    

    res.json({
        categoria
    })
},



categoriaPost: async (req,res)=>{
    const {nombre,descripcion}=req.body;
    const categoria = new Categoria({nombre,descripcion});

    await categoria.save();

    res.json({
        categoria
    })
}
}




export default categoriasControllers