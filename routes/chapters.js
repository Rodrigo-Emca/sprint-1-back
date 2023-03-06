import express from 'express'
import validator from '../middlewares/validator.js';
import schema from '../schemas/chapters.js';
import Chapther from '../models/Chapter.js';
import controller from '../controllers/chapter.controller.js'
import existsOrder from '../middlewares/chapters/exists_order.js';
import nextOrder from '../middlewares/chapters/next_order.js';
let router = express.Router();

router.post('/',validator(schema), existsOrder, nextOrder, controller.create)

export default router