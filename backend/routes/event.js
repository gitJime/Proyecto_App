//Eventos

const router = require("express").Router();
const Event = require("../models/Event");
const verify = require("../verifyToken");


//Crear

router.post("/", verify, async (req, res) => {
if(req.user.isAdmin) {
    const newEvent = new Event(req.body);

    try {
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
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
            const updatedEvent = await Event.findByIdAndUpdate(req.params.id, 
                {
                    $set: req.body,
                }, {new:true}
            );
            res.status(200).json(updatedEvent);
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
            await Event.findByIdAndDelete(req.params.id);
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
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
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
            event = await Event.aggregate([
                { $match: {isEvent: true} },
                {$sample: {size: 1} },  
            ]);
        } else {
            event = await Event.aggregate([
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
            const events = await Event.find();
            res.status(200).json(events);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("No estas autenticado")
    }
});

module.exports = router;


