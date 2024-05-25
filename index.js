const express =  require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const BookModel = require('./models/Bookrack')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://niteshyadav2107:nitesh123@bookrack.xuaa9t4.mongodb.net/bookrack?retryWrites=true&w=majority&appName=bookrack");

app.post('/login', (req,res) => {
const{enteredEmail, enteredPassword} = req.body;
BookModel.findOne({enteredEmail: enteredEmail})
.then(user => {
    if(user){
        if(user.enteredPassword === enteredPassword){
            res.json("Success")
        }else{
            res.json("the password is incorrect")
        }
    } else{
        res.json("no record exist")
    }
})

})

app.post('/register', (req, res) => {
BookModel.create(req.body)
.then(bookracks => res.json(bookracks))
.catch(err => res.json(err))
})

app.listen(3002, () => {
    console.log("server is running")
})