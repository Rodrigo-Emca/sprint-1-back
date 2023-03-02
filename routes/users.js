import express from 'express'
import controller from '../controllers/auth/auth.js';
import postSchema from '../schemas/users.js'
import validator from '../middlewares/validator.js';
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'

let router = express.Router();

const {sign_up} = controller

// import create_controller from '../controllers/users/create.js'
// const {create} = create_controller

/* GET users listing. */
router.get('/', (req, res, next) => {
  return res
    .send('Aqui deberían aparecer todos los usuarios.')
    .status(200)
});

router.post('/signup', 
  validator(postSchema),
  accountExistsSignUp,
  sign_up
)

export default router