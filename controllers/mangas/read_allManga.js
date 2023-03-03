//import Manga from '../../models/Manga.js' 

const controller = {
    read_all: (req, res) => {
        //res.status(200).send("nuevo Manga");
        res.status(200).send("aca se verian todos los mangas");
    }
}
//controller tiene que ser un objeto con una propiedad que va a ser un metodo


export default controller