import {Router} from 'express';
import {check} from 'express-validator';
import {validarCampos} from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import articulosControllers from '../controllers/articulo.js';
import { existeArticuloById, existeArticuloByNombre } from '../helpers/articulo.js';
import { validarRoles } from '../middlewares/validar-rol.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    validarCampos
],articulosControllers.articuloGet);

router.get('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeArticuloById),    
    validarCampos
    
],articulosControllers.articuloGetById)

router.post('/',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeArticuloByNombre),
    validarCampos

],articulosControllers.articuloPost);

router.put('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeArticuloById),
    check('nombre').custom(existeArticuloByNombre),
    validarCampos
],articulosControllers.articuloPut);

/*
router.put('/activar/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeArticuloById),    
    validarCampos
],articulosControllers.articuloPutActivar);


router.put('/desactivar/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeArticuloById),    
    validarCampos
],articulosControllers.articuloPutDesactivar);
*/

router.delete('/:id',[
    validarJWT,
    validarRoles('ALMACENISTA_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeArticuloById),    
    validarCampos
],articulosControllers.articuloDelete);



export default router;