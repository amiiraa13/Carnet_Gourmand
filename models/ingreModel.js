const mongoose = require("mongoose") ;
const Schema = mongoose.Schema;
const ingredientSchema = new Schema({
    nom : {
        type : String,
        required: [true, "l'ingredient' doit avoir un nom"]
    },
    quantite : {
        type : String,
        required: [true, "l'ingredient' doit avoir une quantité"]
    },
})
const ingreModel = mongoose.model('ingredients',ingredientSchema)
module.exports = ingreModel