import userRouter from './users.js'
import authorRouter from './authors.js';


import express from 'express';
let router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter)
router.use('/api/authors', authorRouter);


export default router