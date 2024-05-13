//Eventos

const router = require("express").Router();
const Categorias = require("../models/Categorias");
const verify = require("../verifyToken");


//Crear

router.post("/", verify, async (req, res) => {
if(req.user.isAdmin) {
    const newCategory = new Categorias(req.body);

    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch(err){
        res.status(500).json(err);
    }
    } else {
        res.status(403).json("No estas autenticado");
    }
});


//Actualizar 
router.put("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {    
        try {
            const updatedCategory = await Categorias.findByIdAndUpdate(req.params.id, 
                {
                    $set: req.body,
                }, {new:true}
            );
            res.status(200).json(updatedCategory);
        } catch(err){
            res.status(500).json(err);
        }
        } else {
            res.status(403).json("No estas autenticado");
        }
    });

//Borrar
router.delete("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {    
        try {
            await Categorias.findByIdAndDelete(req.params.id);
            res.status(200).json("El evento ha sido eliminado");
        } catch(err){
            res.status(500).json(err);
        }
        } else {
            res.status(403).json("No estas autenticado");
        }
    });


// Consultar
router.post("/:id", verify, async (req, res) => {  
    try {
        const categ = await Categorias.findById(req.params.id);
        res.status(200).json(categ);
    } catch(err){
        res.status(500).json(err);
    }
});

// Consultar Random 
router.post("/random", verify, async (req, res) => {  
    const type = req.query.type;
    let event;
    try {
        if(type==="Eventos"){
            event = await Categ.aggregate([
                { $match: {isEvent: true} },
                {$sample: {size: 1} },  
            ]);
        } else {
            event = await Categ.aggregate([
                { $match: { isEvent: false } },
                { $sample: { sise: 1 } },
            ]);
        }
        res.satus(200).json(event);
    } catch(err){
        res.status(500).json(err);
    }
});


//Consultar todo 

router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const categ = await Categ.find();
            res.status(200).json(categ);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("No estas autenticado")
    }
});

module.exports = router;


 