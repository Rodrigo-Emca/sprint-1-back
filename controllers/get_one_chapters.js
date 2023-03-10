import Chapter from "../models/Chapter.js"

const controllerChapter = {
    chapter: async (req, res) =>{
        try{
            let chapter = await Chapter.findOne({_id: req.params.id}).select('title order pages -_id')
            if(chapter){
                return (
                    res.status(200).json({
                        Chapters: chapter
                    })
                )
            }
        }
        catch(error){
            res.status(404).json({
                message:'The chapter does not exist',
            })
            next(error)
        }
    }
}

export default controllerChapter