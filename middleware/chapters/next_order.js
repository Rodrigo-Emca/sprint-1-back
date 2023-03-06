import Chapter from "../../models/Chapter.js";

async function nextOrder(req, res, next) {
    if (!req.body.order) {
        const chapter = await Chapter.findOne({ manga_id: req.body.manga_id }).sort("-order")
        req.body.order = chapter ? chapter.order + 1 : 1
    }
    next()
}

export default nextOrder