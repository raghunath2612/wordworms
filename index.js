var express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");
var cors=require("cors");
var path=require("path");


mongoose.connect("mongodb+srv://wordworms:wormsword@123@cluster0-n8ceq.mongodb.net/Book",{useNewUrlParser:true, useUnifiedTopology: true });
var app=express();
app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

const bookSchema=({
    name:String,
    language:String,
    genre:String,
    image:String,
    author:String,
    story:String
})
const Book=mongoose.model('Book',bookSchema)
app.get("/",(req,res)=>{
    res.send('foobar');
});

app.get("/getbooks",function(req,res,next){
    Book.find(function(err,books){
        res.json(books);
    })
})



app.post('/addbooks',function(req,res,next){
    console.log(req.body.name);
    let newContact=new Book({
        name:req.body.name,
        language:req.body.language,
        genre:req.body.genre,
        image:req.body.image,
        author:req.body.author,
        story:req.body.story
    });
    console.log(newContact);
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:"Failed in adding contact"});
        }
        else{
            res.json({msh:"Contact added succesfully"});
        }
    });
});

app.listen(3000,function(){
    console.log("Succesfully connected on port 3000");
})