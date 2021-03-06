import {Router} from 'express';
import {check} from 'express-validator';
import {validarCampos} from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import { existeArticuloById, existeArticuloByNombre } from '../helpers/articulo.js';
import { validarRoles } from '../middlewares/validar-rol.js';
import ventaControllers from '../controllers/venta.js';
import { existeseriecomprobante, existeVentaById } from '../helpers/venta.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    validarCampos
],ventaControllers.ventaGet);

router.get('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeArticuloById),    
    validarCampos
    
],ventaControllers.ventaGetById)

router.post('/',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('seriecomprobante').custom(existeseriecomprobante),
    validarCampos

],ventaControllers.ventaPost);

router.put('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeVentaById),
    validarCampos
],ventaControllers.ventaPut);


router.put('/activar/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeVentaById),    
    validarCampos
],ventaControllers.ventaPutActivar);


router.put('/desactivar/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeVentaById),    
    validarCampos
],ventaControllers.ventaPutDesactivar);


router.delete('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeVentaById),    
    validarCampos
],ventaControllers.ventaDelete);



export default router;