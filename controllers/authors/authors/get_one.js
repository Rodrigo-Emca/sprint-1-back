import Author from "../../models/Author.js";
import User from "../../models/User.js";

async function getOneAuthor(req, res) {
  try {
    const author_id = req.params.id;
    const author = await Author.findById(author_id);

    if (!author) {
      return res.status(404).send("Author not found");
    }

    // Proteger los datos sensibles antes de enviarlos en la respuesta
    delete author.password;
    delete author.token;

    res.send(author);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

export default getOneAuthor;
