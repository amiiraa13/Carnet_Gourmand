const receModel = require("../models/receModel")
const receRouter = require("express").Router() 

receRouter.get("/recettes", async (req, res) => {
    try {
        let livre = await receModel.find(req.query).populate({path:'ingredients'})
        res.send(livre)
    } catch (error) {


    }
})

receRouter.get("/recettes/:id",async (req, res) => {
    try {
        let recettesId = await receModel.findOne({ _id: req.params.id }).populate({path:'ingredients'})
        res.send(recettesId)
    } catch (error) {
        console.log('recettes non trouvé');

    }
})

receRouter.post("/recettes", async (req, res) => {
    try {
        let newrecettes = new receModel(req.body)
        newrecettes.save()
        res.send("la recette a bien été ajouté")
    } catch (error) {

    }
})

receRouter.put("/recettes/:id", async (req, res) => {
    try {
        await receModel.updateOne({ _id: req.params.id }, req.body)
        res.send("la recette a été modifié")
    } catch (error) {
        res.send(error)
    }
})
  
receRouter.delete("/recettes/:id",async(req, res) => { 
    try{
        await receModel.deleteOne({_id: req.params.id})
        res.send("recette supprimer")
    }catch (error){
        res.send(error)
    }
})


module.exports = receRouter 