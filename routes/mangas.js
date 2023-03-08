import express from 'express';
import Manga from '../models/Manga.js';
import Author from '../models/Author.js';
import isPropertyOf from '../middlewares/authors/is_property_of.js';

let router = express.Router();

// GET all mangas
router.get('/', async (req, res) => {
  try {
    const mangas = await Manga.find().populate('author', 'name');
    res.status(200).json(mangas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching mangas' });
  }
});

// GET one manga
router.get('/:id', async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id).populate('author', 'name');
    if (!manga) return res.status(404).json({ message: 'Manga not found' });
    res.status(200).json(manga);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching manga' });
  }
});

// CREATE a manga
router.post('/', async (req, res) => {
  try {
    const author = await Author.findById(req.body.author);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    const manga = new Manga(req.body);
    manga.author = author._id;
    const savedManga = await manga.save();
    res.status(201).json(savedManga);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating manga' });
  }
});


