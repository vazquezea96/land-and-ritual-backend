import { Router } from "express";
import * as productsCtrl from '../controllers/products.js'

const router = Router();

router.post('/',productsCtrl.create),
router.get('/',productsCtrl.index)


export { router };
