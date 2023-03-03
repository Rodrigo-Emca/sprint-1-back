//import Manga from '../../models/Manga.js'
//import categories from '../../models/data/categories.js'
//ESTE CONTROLADOR LO PASO IGNACIO!!! PERO NOSE COMO USARLO :(
const controller = {
    all: async(req,res,next)=> {
        try {
            let all = await Category.find()
            if (all) {
                return res.status(200).json({
                    success: true,
                    message: "All categories",
                    categories: all
                })
            } else {
                return res.status(200).json({
                    success: true,
                    message: "No categories yet",
                    categories: all
                })
            }    
        } catch(error) {
            next(error)
        }
    }
}

export default controller


/* 
routes/categories.js
router.get('/',all)
*/