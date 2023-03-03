import express from "express";
import mangaCreate from '../schemas/mangaCreate.js'
import Manga from '../models/Manga.js'
import validator from '../middlewares/validator.js'
import validator_title from '../middlewares/mangas/exists_title.js'

import create_manga from '../controllers/mangas/createManga.js'
import read_all_manga  from '../controllers/mangas/read_allManga.js'
import categories_manga from '../controllers/categories/all.js'

const { create } = create_manga
const { read_all } = read_all_manga
const { all } = categories_manga

let router = express.Router();

/* GET users listing. */
router.get("/", read_all);
router.post("/", validator(mangaCreate),validator_title,create)

//routes/categories.js
router.get('/all',all)
 

export default router;