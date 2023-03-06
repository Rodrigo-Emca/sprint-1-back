import Chapter from '../../models/Chapter.js'

async function existsOrder(req, res, next){
    const chapter = await Chapter.findOne({order: req.body.order})
    if(chapter){
        return res.status(400).json({
            success: false,
            message: 'el order ya existe'
        })
    }
    next()
}

export default existsOrder