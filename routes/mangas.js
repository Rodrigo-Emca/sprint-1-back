import express from 'express'
import mostrar_categoriescontroller from '../controllers/categories/show_categories.js'
import mangaCreate from '../schemas/mangaCreate.js'
import validator from '../middlewares/validator.js'
import validator_title from '../middlewares/mangas/exists_title.js'
//import is_active from '../middlewares/authors/is_active.js' //MIDDLEWARE M06
//import is_property_of from '../middlewares/authors/is_property_of.js' //MIDDLEWARE M06

import create_manga from '../controllers/mangas/createManga.js'


let router = express.Router();
const { show } = mostrar_categoriescontroller
const { create } = create_manga



router.get("/", show)
//router.post("/", validator(mangaCreate),validator_title,is_active,is_property_of,create) //RUTA CON VALIDADOR DEL M06
router.post("/", validator(mangaCreate),validator_title,create)

export default router;