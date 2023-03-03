import express from 'express'
import validator from '../middleware/validator.js';
import schema from '../schemas/chapters.js';
import Chapther from '../models/Chapter.js';
import controller from '../controller/chapthers/chapter.controller.js'
let router = express.Router();

router.post('/',validator(schema), controller.create)

export default router