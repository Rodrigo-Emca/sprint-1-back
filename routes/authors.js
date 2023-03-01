import express from 'express';
import createAuthor from '../controllers/authors/create.js';
import Author from '../models/Author.js';
import is_active from '../middlewares/authors/is_active.js'; // importar el middleware

const router = express.Router();

router.post('/', /*is_active,*/ async (req, res) => {
  try {
    const { name, birthdate, lastName, profileImage, country} = req.body;
   // const { _id: createdBy } = req.user;

    const author = new Author({
      name,
      birthdate,
      lastName,
        profileImage,
        country,
      //createdBy,
      active: true, // hasta que configuremos el panel de admin
    });

    const savedAuthor = await author.save();


    res.status(201).json(savedAuthor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear el autor de manga' });
  }
});

export default router;

