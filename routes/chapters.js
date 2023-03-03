import express from 'express'
import validator from '../middleware/validator.js';
import schema from '../schemas/chapters.js';
import Chapther from '../models/Chapter.js';
// import controller from '../controller/chapthers/create.js'
let router = express.Router();

router.post('/',validator(schema), async(req, res)=>{
    try{
        req.body.manga_id = '63ffafade652fa554fe009eb'
        let controller = await Chapther.create(req.body)
        return res.status(201).json({
            success: true, 
            message: "capitulo creado correctamente."
    })
    }catch(error){
        return res.status(400).json({
            success: false,
            message: 'no se pudo crear el capitulo'
        })
    }
})

export default router