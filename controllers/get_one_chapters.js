import Chapter from "../models/Chapter.js"

const controllerChapter = {
    chapter: async (req, res) =>{
        try{
            if(Chapter){
                let allChapters = await Chapter.findOne({_id: req.params.id}).select('title order pages -_id')
                return (
                    res.status(201).json({
                        Chapters: allChapters
                    })
                )
            }
        }
        catch(error){
            res.status(404).json({
                message:'The chapter does not exist'
            })
        }
    }
}

export default controllerChapter