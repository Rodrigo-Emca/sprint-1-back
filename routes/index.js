import userRouter from './users.js'
<<<<<<< HEAD
import chaptersRouter from './chapters.js'
=======
import authorRouter from './authors.js';

>>>>>>> 8e51527d2f6d1ab0a8aa748619a9d43a2b3d228f

import express from 'express';
let router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
<<<<<<< HEAD
router.use('/chapters', chaptersRouter)
=======
router.use('/api/authors', authorRouter);

>>>>>>> 8e51527d2f6d1ab0a8aa748619a9d43a2b3d228f

export default router