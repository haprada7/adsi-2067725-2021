const validarRoles=(...roles)=>{
    return (req,res,next)=>{
        if(!(roles.includes(req.usuario.rol) || req.usuario.rol==='admin_rol'  ) ){
            return res.status(401).json({
                msg:`el servicio requiere uno de estos roles ${roles}`
            })
        }
        next();
    }

}

export {validarRoles}