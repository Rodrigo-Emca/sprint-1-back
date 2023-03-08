import mongoose from "mongoose";
import Author from "../../../models/Author.js";

// para buscar autor a partir de su id
 async function getOneAuthor(req, res) {
    const authorId = req.params.id;
    try{
        const author = await Author.findById(authorId);
        if (!author || !author.active) {
            return res.status(404).json({ message: 'Author not found or inactive' });
    }
    const safeAuthor = { 
        _id: author._id,
        name: author.name,
        email: author.email
    }
       res.status(200).json(safeAuthor);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error validating author' });

    }
}

export default getOneAuthor;