//importing modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Item = require('./item.js')

//connecting mongoose
mongoose.connect('mongodb+srv://ankushhegde:cwjxgfy@cluster0.cwjxgfy.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to todoDB')
});

//DECLARATIONS
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

//METHODS
app.get('/', async (req, res) =>{   
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let itemName = await Item.find(req.params.item);
    let day = today.toLocaleDateString("en-US",options)
    res.render('list.ejs', { listTitle: day, newlistitems: itemName });
});

app.post("/", function (req, res) {
    const itemName = req.body.newitem
    const itemnew = new Item({
        item: itemName
    })
    itemnew.save()
    res.redirect("/");
})

app.post("/delete", async(req, res) =>{
    const checked = req.body.checkBox;
    try {
        await Item.findByIdAndRemove(checked);
        res.redirect("/");
        console.log("Item "+checked+" deleted successfully")
    } catch (err) {
        console.log(err);
    }  
})

app.listen(3000, function () {
    console.log('listening on port 3000');
});
