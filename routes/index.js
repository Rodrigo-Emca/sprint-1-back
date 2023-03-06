import userRouter from './users.js'
import authorRouter from './authors.js';
import mangaRouter from './mangas.js'

import express from 'express';
let router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/api/authors', authorRouter);
router.use('/mangas', mangaRouter)


export default router