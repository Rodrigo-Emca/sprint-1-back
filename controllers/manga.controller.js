import Manga from '../models/Manga.js'


const controller = {
  create: async (req, res) => {
    try {
      req.body.author_id = "63fe8112f09373806fd89fe5"

      let manga = await Manga.create(req.body);
      return res.status(201).json({
        success: true,
        message: "se creo un nuevo manga",

      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: "no se pudo crear un manga",
      });
    }
  },
  get_mangas: async (req, res, next) => {

    let consultas = {}
    
    let pagination = {
      page: 1, 
      limit: 6
    }
    
    if (req.query.title) {
      consultas.title = new RegExp(req.query.title.trim(),'i')
      pagination.limit = 10
    }

    if (req.query.category_id) {
        //consultas['category_id.name'] = req.query.category_id
        const categ = req.query.category_id.split(',');//con split lo captura por comas, y se transforma en un array
        consultas.category_id = {$in:categ}// ahora valida si existe, crea un objeto, si existe en la consulta la devuelve
        pagination.limit = 10
    } 
 
    if (req.query.page) {
      pagination.page = req.query.page
    }
    if (req.query.quantity) { 
      pagination.limit = req.query.quantity
    }
    try {
      let all = await Manga.find(consultas)//consultas es un objeto al que mas arriba se le aplican condicionales
      .select('title category_id cover_photo')
      .sort({ title: 1})  
      .skip( pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0 )//.skip--corta desde donde
      .limit( pagination.limit > 0 ? pagination.limit : 0 )//hasta donde
      .populate("category_id", "name -_id")//accede al name de la categoria

      return res.status(200).json({ 
        success: true,
        message: "All mangas",
        mangas: all
      })

    }
    catch(err) {
      next(err)
    } 
  } 
  
  
}

export default controller

//http://localhost:8000/mangas/read?title= a &category_id=640a29d5aa914d6b7c5846e9 // ok anda
// http://localhost:8000/mangas/read?title=a&category_id=640a29d5aa914d6b7c5846e9,640a29d5aa914d6b7c5846ec //ok anda

