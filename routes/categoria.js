import {Router} from 'express';
import categoriasControllers from '../controllers/categoria.js';
import {check} from 'express-validator';
import {validarCampos} from '../middlewares/validar-campos.js';
import {existeCategoriaById, existeCategoriaByNombre} from '../helpers/categorias.js';
import { validarJWT } from '../middlewares/validar-jwt.js';

const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
],categoriasControllers.categoriaGet);

router.get('/:id',[
    validarJWT,
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCategoriaById),    
    validarCampos
    
],categoriasControllers.categoriaGetById)

router.post('/',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos

],categoriasControllers.categoriaPost);

router.put('/:id',[
    validarJWT,
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCategoriaById),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
],categoriasControllers.categoriaPut);


router.put('/activar/:id',[
    validarJWT,
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCategoriaById),    
    validarCampos
],categoriasControllers.categoriaPutActivar);


router.put('/desactivar/:id',[
    validarJWT,
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCategoriaById),    
    validarCampos
],categoriasControllers.categoriaPutDesactivar);

router.delete('/:id',[
    validarJWT,
    check('id','no es un id valido').isMongoId(),
    check('id').custom(existeCategoriaById),    
    validarCampos
],categoriasControllers.categoriaDelete);



export default router;

//26:16-090321