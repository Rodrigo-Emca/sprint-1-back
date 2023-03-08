const Manga = require('../models/manga');
import protectData from '../utils/protectData.js';

const get_mangas_from_author = async (req, res) => {
  try {
    const author_id = req.params.author_id;
    let new_query = true;
    if (req.query.new === 'false') {
      new_query = false;
    }

    const mangas = await Manga.find({ author: author_id }).sort({ release_date: new_query ? 'desc' : 'asc' }).limit(4);
    if (mangas.length < 4) {
      mangas = await Manga.find({ author: author_id }).sort({ release_date: new_query ? 'desc' : 'asc' });
    }

    const protectedMangas = mangas.map((manga) => {
      return protectData(manga.toObject());
    });

    res.json(protectedMangas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export default get_mangas_from_author;
