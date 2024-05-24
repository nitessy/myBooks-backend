const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema(
    {
        enteredUserName : String,
         enteredEmail: String,
          enteredPassword : String
    }
)

const BookModel = mongoose.model("bookracks", BookSchema)
module.exports = BookModel