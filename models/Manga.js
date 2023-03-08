
import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description:{ type: String, required: true },
    category: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

let Manga = mongoose.model("mangas", schema);

export default Manga;

/* 


"title": "xxxx",
"description": "xxxxx",
"category": "xxxx"
*/