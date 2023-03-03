import Chapter from "../models/Chapter.js"

const controller = {
    create: async (req, res)=>{
        try{
            req.body.manga_id = '63ffafade652fa554fe009eb'
            let controller = await Chapther.create(req.body)
            return res.status(201).json({
                success: true, 
                message: "capitulo creado correctamente."
        })
        }catch(error){
            return res.status(400).json({
                success: false,
                message: 'no se pudo crear el capitulo'
            })
        }
    }
}

export default controller