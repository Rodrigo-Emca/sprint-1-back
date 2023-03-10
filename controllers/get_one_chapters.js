import Chapter from "../models/Chapter.js"

const controllerChapter = {
    chapter: async (req, res) =>{
        try{
            let chapters = await Chapter.findOne({_id: req.params.id}).select('title order pages -_id')
            if(chapters){
                return (
                    res.status(200).json({
                        Chapters: chapters
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