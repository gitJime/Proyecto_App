const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const UserModel = require('./models/Users')


const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(usuarios => res.json((usuarios)))
    .catch(err => res.json(err))
})


app.listen, () => {
    console.log("Server corriendo")
})