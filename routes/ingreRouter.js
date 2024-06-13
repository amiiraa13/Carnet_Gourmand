const ingreModel = require("../models/ingreModel")
const ingreRouter = require("express").Router() 

ingreRouter.get("/ingredients", async (req, res) => {
    try {
        let ingre = await ingreModel.find(req.query)
        res.send(ingre)
    } catch (error) {


    }
})

ingreRouter.get("/ingredients/:id",async (req, res) => {
    try {
        let ingreId = await receModel.findOne({ _id: req.params.id })
        res.send(ingreId)
    } catch (error) {
        console.log('ingredients non trouvé');

    }
})

ingreRouter.post("/ingredients", async (req, res) => {
    try {
        let newingre = new ingreModel(req.body)
        newingre.save()
        res.send("la recette a bien été ajouté")
    } catch (error) {
        res.send(error)
    }
})

ingreRouter.put("/ingredients/:id", async (req, res) => {
    try {
        await ingreModel.updateOne({ _id: req.params.id }, req.body)
        res.send("la recette a été modifié")
    } catch (error) {
        res.send(error)
    }
})

ingreRouter.delete("/ingredients/:id",async(req, res) => {
    try{
        await ingreModel.deleteOne({_id: req.params.id})
        res.send("recette supprimer")
    }catch (error){
        res.send(error)
    }
})


module.exports = ingreRouter 