/* import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    author_id:{ type: mongoose.Types.ObjectId,ref: 'author_id',required: true },
    company_id:{ type: mongoose.Types.ObjectId,ref: 'company_id'},
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description:{ type: String, required: true },
    category_id:{ type: mongoose.Types.ObjectId,ref: 'category_id',required: true },
  },
  {
    timestamps: true,
  }
);

let Manga = mongoose.model("manga", schema);

export default Manga; */

/* 
"author_id": "",
"company_id":"",
"title": "xxxx",
"cover_photo": "xxxx",
"description": "xxxxx",
"category_id": ""
*/

import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true },
    cover_photo: { type: String, required: true },
    author_id: { type: String, required: true,  ref: "authors" },
    company_id: { type: String,  ref: "companies" },
    category_id: { type: String, required: true,  ref: "categories" },
  },
  {
    timestamps: true,
  }
);

let Manga = mongoose.model("mangas", schema);

export default Manga;