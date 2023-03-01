import express from 'express'
import controller from '../controller/chapthers/create.js'
let router = express.Router();

router.post('/', controller.create)

export default router