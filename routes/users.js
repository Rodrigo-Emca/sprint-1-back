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
        let user = await User.create(req.body)
        return res.status(201).send("Usuario creado correctamente.")
    } catch(error){
      console.log(error)
      return res.status(400).send("No se pudo crear el usuario.")
    }
  }
)

export default router