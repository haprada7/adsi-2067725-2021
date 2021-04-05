import {Router} from 'express';
import personaControllers from '../controllers/persona.js';
import { existePersonaById, validarTipoDocumento, validarTipoPersona } from '../helpers/persona.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { validarJWT } from '../middlewares/validar-jwt.js';


const router = Router();

router.get('/',personaControllers.personaGet);

router.get('/:id',personaControllers.personaGetById);

router.post('/',[
    validarJWT,
    //check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('nombre').custom(existePersonaById),
    //check('tipodocumento').custom(validarTipoDocumento),
    //check('tipopersona').custom(validarTipoPersona),
    validarCampos

],personaControllers.personaPost);

router.put('/:id',personaControllers.personaPut);

router.put('/activar/:id',personaControllers.personaPutActivar);


router.put('/desactivar/:id',personaControllers.personaPutDesactivar);





export default router;