import { Router } from "express";
import * as productsCtrl from '../controllers/products.js'

const router = Router();

router.post('/',productsCtrl.create)


export { router };
