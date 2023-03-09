import Manga from '../../models/Manga.js';

const is_property_of = async (req, res, next) => {
  try {
    const manga = await Manga.findById(req.params.mangaId);

    if (!manga || String(manga.author) !== String(req.params.id)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.manga = manga;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error validating manga ownership' });
  }
};

export default is_property_of;
