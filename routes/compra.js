import {Router} from 'express';
import {check} from 'express-validator';
import {validarCampos} from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';
import { validarRoles } from '../middlewares/validar-rol.js';
import compraControllers from '../controllers/compra.js';
import { existeCompraById, existeseriecomprobanteC } from '../helpers/compra.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    validarCampos
],compraControllers.compraGet);

router.get('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(), 
    validarCampos
    
],compraControllers.compraGetById)

router.post('/',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('seriecomprobante').custom(existeseriecomprobanteC),
    validarCampos

],compraControllers.compraPost);

router.put('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCompraById),
    validarCampos
],compraControllers.compraPut);


router.put('/activar/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCompraById),    
    validarCampos
],compraControllers.compraPutActivar);


router.put('/desactivar/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCompraById),    
    validarCampos
],compraControllers.compraPutDesactivar);


router.delete('/:id',[
    validarJWT,
    validarRoles('VENDEDOR_rol'),
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCompraById),    
    validarCampos
],compraControllers.compraDelete);



export default router;