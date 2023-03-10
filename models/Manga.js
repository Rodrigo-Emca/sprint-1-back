
import mongoose from "mongoose";

let schema = new mongoose.Schema(
 /*  {
    title: { type: String, required: true },
    description:{ type: String, required: true },
    category: {type: String, required: true}
  },
  {
    timestamps: true,
  } */
    {
      author_id: { type: mongoose.Types.ObjectId, require: true },
      company_id: { type: mongoose.Types.ObjectId },
      title: { type: String, required: true },
      cover_photo: { type: String, required: true },
      description: { type: String, required: true },
      category_id: { type: mongoose.Types.ObjectId, require: true }
    },{
      timestamps: true
    }

);

let Manga = mongoose.model("mangas", schema);

export default Manga;

/* 


"title": "xxxx",
"description": "xxxxx",
"category": "xxxx"
*/