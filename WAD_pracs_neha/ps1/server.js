const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const Student = require("./model/student");

const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    try{   
        console.log("he") 
        res.render('index');
    }catch(err){
        res.status(500).json({error:err.message});
    }
})

app.get('/getmarks',async(req,res)=>{
    try {
        const students = await Student.find({});
        const count = students.length;
        res.render('table',{students,count});
    } catch (err) {
        res.status(500).json({error:err.message});
    }
})

app.post('/addmarks',async(req,res)=>{
    try {
        var myData = new Student(req.body);
        const student = await Student.create(myData);
        res.redirect('/getmarks');
    } catch (err) {
        res.status(500).json({error:err.message});
    }
})

app.get('/dsbdamarksgt20',async(req,res)=>{
    try {
        const students = await Student.find({
            dsbda_marks:{$gt:20}
        });      
        const count = students.length;
        res.render('table',{students,count});
    } catch (err) {
        res.status(500).json({error:err.message});
    }
})

app.get('/wadccmarksgt20',async(req,res)=>{
    try {
        const students = await Student.find({
            wad_marks:{$gt:20},
            cc_marks : {$gt:20}
        });      
        const count = students.length;
        res.render('table',{students,count});
    } catch (err) {
        res.status(500).json({error:err.message});
    }
})

app.post('/deletestudent/:id',async(req,res)=>{
    try {
        const students = await Student.findByIdAndDelete(req.params.id);      
        res.redirect('/getmarks')
    } catch (err) {
        res.status(500).json({error:err.message});
    }
})

app.post('/updateby10/:id',async(req,res)=>{
    try {
        const stu = await Student.findById(req.params.id);  
        const newstudent = await Student.findByIdAndUpdate(
            req.params.id,
            {
                wad_marks: stu.wad_marks + 10,
                cc_marks: stu.cc_marks + 10,
                dsbda_marks: stu.dsbda_marks + 10,
                ai_marks: stu.ai_marks + 10,
                cns_marks: stu.cns_marks + 10,
            },
            req.body
        )    
        res.redirect('/getmarks')
    } catch (err) {
        res.status(500).json({error:err.message});
    }
})


let port = 5000;
let url = 'mongodb+srv://sumit:sumit123@nodetuts.egcdbe9.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(()=>{
        app.listen(port,function(){
            console.log("Database connected successfully and server is started")
            console.log("http://localhost:" + port)
        })
    })
    .catch((err)=>{
        console.log("problem to connect with database")
        console.log(error)
    })