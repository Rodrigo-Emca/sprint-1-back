import Manga from '../../models/Manga.js';

const controller = {
  get_mangas_from_author: async (req, res) => {
  console.log(req.params.author_id)
  try {
    console.log(req.params)
    const authorId = req.params.author_id;
    const { new: isNew = true } = req.query;
  
    let mangas = await Manga.find({author_id: req.params.author_id}).select('title category_id cover_photo')
    console.log(mangas)
   /* if (isNew) {
      console.log('if')
    
     
     
        
        
    } else {
      console.log('else')
      mangas = await Manga.find({ author_id: authorId })
        .sort('published_date')
        .limit(4);
    } */



    res.status(200).json({ success: true, data: mangas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
};
export default controller;
