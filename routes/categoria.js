import {Router} from 'express';
import categoriasControllers from '../controllers/categoria.js';

const router = Router();

router.get('/',categoriasControllers.categoriaGet);
router.get('/:id',categoriasControllers.categoriaGetById)

router.post('/',categoriasControllers.categoriaPost);

router.put('/');


router.put('/activar');


router.put('/desactivar');

router.delete('/');



export default router;