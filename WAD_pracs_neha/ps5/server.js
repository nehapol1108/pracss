const mongoose  = require('mongoose')
const express  = require('express')
const bodyParser  = require('body-parser')
const Songs = require('./model/Songs')

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

app.get('/',(req,res)=>{
    try {
        res.render('index');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/addsongs',async(req,res)=>{
    try {
        const song = new Songs(req.body);
        const createSong = await Songs.create(song);
        res.redirect('/getsongs');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('/getsongs',async(req,res)=>{
    try {
        const songs = await Songs.find({});
       const count = songs.length;
       res.render('table',{songs,count});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('/specific/:musicdir',async(req,res)=>{
    try {
       const songs = await Songs.find( {music_director:req.params.musicdir});
       const count = songs.length;
       res.render('table',{songs,count});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('/specific/:musicdir/:singer',async(req,res)=>{
    try {
       const songs = await Songs.find({ 
        music_director:req.params.musicdir,
        singer : req.params.singer

    });
       const count = songs.length;
       res.render('table', { songs: songs, count: count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/deletesong/:id',async(req,res)=>{
    try {
       const songs = await Songs.findByIdAndDelete(req.params.id);
       res.redirect('/getsongs');
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.get('/specific1/:singer/:film',async(req,res)=>{
    try {
       const songs = await Songs.find({ 
        singer:req.params.singer,
        film : req.params.film

    });
       const count = songs.length;
       res.render('table', { songs: songs, count: count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/updatesong/:id', async(req,res)=>{
    try {
        const song = await Songs.findByIdAndUpdate(req.params.id,req.body);
        res.redirect('/getsongs');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
let url = 'mongodb+srv://sumit:sumit123@nodetuts.egcdbe9.mongodb.net/?retryWrites=true&w=majority';
let port = 4321
mongoose.connect(url)
    .then(()=>{
        app.listen(port,function(){
            console.log("connected");
        })
    })
    .catch((error)=>{
        console.log("error while connecting to db " + error.message);
    })