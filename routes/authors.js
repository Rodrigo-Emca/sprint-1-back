import express from 'express';
import validator from '../middlewares/authors/validator.js';
import postSchema from '../schemas/authors.js';
import { getAllAuthors } from '../controllers/authors/authorController.js';
import { createAuthor } from '../controllers/authors/authorsController.js';
import is_active from '../middlewares/auth/is_active.js';
import getOneAuthor from '../controllers/authors/get_one.js';
import passport from 'passport';


const router = express.Router();

// Obtener todos los autores
router.get('/', getAllAuthors);

// Obtener un autor
router.get('/:id', getOneAuthor);

// Crear un nuevo autor
router.post('/', passport.authenticate('jwt', {session: false}) , validator(postSchema),createAuthor);

// Obtener mangas de un autor

export default router;
