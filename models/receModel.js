const mongoose = require("mongoose") ;
const Schema = mongoose.Schema;

const cuisSchema = new Schema({
    titre : {
        type : String,
        required: [true, "la recette doit avoir un titre"]
    },
     instructions:{ 
        type:String,
        required:[true,"la recette doit avoir des instructions"]
    },
    temps:{ 
        type:String,
        required:[true,"la recette doit avoir un temps"]
    },
    difficulte:{  
        type:String,
        required:[true,"la recette doit avoir une difficulté"]
    },  
    categorie:{ 
        type:String,
        required:[true,"la recette doit avoir une catégorie"]
    },
    ingredients:[{ type: Schema.Types.ObjectId, ref: 'ingredients' }],
   
})

const receModel = mongoose.model('recettes',cuisSchema)
module.exports = receModel