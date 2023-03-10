import Category from "../Category.js";
import 'dotenv/config.js'
import '../../config/database.js'


/* let categories = [
    {
        name: "shonen",
        detail: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        admin_id: "63ff95fefc90ce52042b5ea8"
    },{
        name: "manhwa",
        detail: "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        admin_id: "63ff95fefc90ce52042b5ea8"
    },{
        name: "marvel",
        detail: "American superhero comics",
        admin_id: "63ff95fefc90ce52042b5ea8"
    },{
        name: "dc",
        detail: "American superhero comics",
        admin_id: "63ff95fefc90ce52042b5ea8"
    },{
        name: "shojo",
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        admin_id: "63ff95fefc90ce52042b5ea8"
    },{
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone.",
        admin_id: "63ff95fefc90ce52042b5ea8"
    }
] */

let categories = [
    {
        name: "shonen",
        detail: "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists."
    },{
        name: "comic",
        detail: "Marvel, DC and anothers comics"
    },{
        name: "shojo",
        detail: "It is aimed especially at the adolescent female audience, being mostly starring a girl."
    },{
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone."
    }
]
﻿
Category.insertMany(categories)