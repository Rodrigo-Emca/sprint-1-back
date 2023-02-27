import express from 'express'
import User from '../models/User.js';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  return res
    .send('respond with a resource')
    .status(200)
});

router.post('/', 
  async (req, res) =>{
    try {
        req.body.photo = false;
        req.body.is_online = false;
        req.body.is_admin = false;
        req.body.is_author = false;
        req.body.is_company = false;
        req.body.is_verified = false;
        req.body.verify_code = false;
        let user = await User.create(req.body)
        return res.status(201).json({
          success: true, 
          message: "Usuario creado correctamente."
        })
    } catch(error){
      console.log(error)
      return res.status(400).send("No se pudo crear el usuario.")
    }
  }
)

export default router