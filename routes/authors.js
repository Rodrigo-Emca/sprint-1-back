import express from 'express';
import Author from '../models/Author.js';

const router = express.Router();

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
router.post('/', async (req, res) => {
  try {
    const { name, lastName, country, profileImage } = req.body;
    const author = new Author({
      name,
      lastName,
      country,
      profileImage,
      active: true,
    });
    await author.save();
    res.status(201).json({ message: 'Autor creado correctamente', author });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el autor' });
  }
});

export default router;




