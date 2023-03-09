import express from 'express';
import validator from '../middlewares/authors/validator.js';
import postSchema from '../schemas/authors.js';
import { getAllAuthors } from '../controllers/authors/authorController.js';
import { createAuthor } from '../controllers/authors/authorsController.js';

const router = express.Router();


// Obtener todos los autores
router.get('/', getAllAuthors);

// Crear un nuevo autor

router.post('/', validator(postSchema), createAuthor);


export default router;