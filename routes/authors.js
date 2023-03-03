import express from 'express';
import Author from '../models/Author.js';
import Joi from 'joi';
import validator from '../middlewares/authors/validator.js';
import postSchema from '../schemas/authors.js';

const router = express.Router();

// Esquema de validación de Joi para el autor
const authorSchema = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  birthdate: Joi.date().required(),
  profileImage: Joi.string().required(),
});

// Obtener todos los autores
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los autores' });
  }
});

// Crear un nuevo autor
router.post('/', validator(postSchema), async (req, res) => {
  try {
    const { error, value } = authorSchema.validate(req.body);
    if (error) {
      // Si hay errores de validación, devolver un error al cliente
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const author = new Author(value);
    await author.save();
    res.status(201).json({ message: 'Autor creado correctamente', author });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el autor' });
  }
});

export default router;





