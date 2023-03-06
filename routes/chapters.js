import express from 'express'
import validator from '../middleware/validator.js';
import schema from '../schemas/chapters.js';
import Chapther from '../models/Chapter.js';
import controller from '../controller/chapter.controller.js'
import existsOrder from '../middleware/chapters/exists_order.js';
import nextOrder from '../middleware/chapters/next_order.js';
let router = express.Router();

router.post('/',validator(schema), existsOrder, nextOrder, controller.create)

export default router