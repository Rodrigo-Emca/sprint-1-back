import express from 'express';
import validator from '../middlewares/authors/validator.js';
import postSchema from '../schemas/authors.js';
import { getAllAuthors } from '../controllers/authors/authors/authorController.js';
import { createAuthor } from '../controllers/authors/authors/authorsController.js';
import is_active from '../middlewares/authors/is_active.js';
import getOneAuthor from '../controllers/authors/authors/get_one.js';

const router = express.Router();


// Obtener todos los autores
router.get('/', getAllAuthors);

// Obtener un autor
router.get('/:id', is_active, getOneAuthor);

// Crear un nuevo autor

router.post('/', is_active, validator(postSchema), createAuthor);


export default router;





