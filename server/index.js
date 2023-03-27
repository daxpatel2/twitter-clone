const express = require('express'); //use express for routes for backend, react router for frontend
const mysql = require('mysql') //import the db connection
const cors = require('cors')

const app = express();
//const  PORT = 3002;
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'twitter'
});

//for registering users
app.post('/signup', (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    //sql query to insert the username and password into the db

    db.QUERY("INSERT INTO users (username, password) VALUES (?,?)",[username,password], (err,result)=> {
        if(err) {
            res.send({message: "error occured dax"})
        } else {
            res.send(result)
        }
    })
})

//for login first check if the username is in the db (will be a unique value)

app.get('/', (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    //sql query to insert the username and password into the db

    db.query("SELECT * FROM users WHERE username = (?) AND password = (?)",[username,password], (err,data)=> {
        if(err) {
            req.setEncoding({err: err})
        } else {
            if (data.length > 0) {
                res.send(data)
            } else {
                res.send({message: "Wrong username/password"})
            }
        }
    })
})
// route to get all users
//techniquly for login we only need to get the username not password
//since we are going to check if the username is in the db and it will be a unqiue value
app.listen(3000, () => {
    console.log('running db server')
})

// app.get("/", (req,res)=>{
// db.query("SELECT * FROM users WHERE username =(?)", (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
// res.send(result)
// });   });

// // Route to get one post
// app.get("/api/getFromId/:id", (req,res)=>{

// const id = req.params.id;
//  db.query("SELECT * FROM posts WHERE id = ?", id, 
//  (err,result)=>{
//     if(err) {
//     console.log(err)
//     } 
//     res.send(result)
//     });   });

// // Route for creating the post
// app.post('/api/create', (req,res)=> {

// const username = req.body.userName;
// const title = req.body.title;
// const text = req.body.text;

// db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
//    if(err) {
//    console.log(err)
//    } 
//    console.log(result)
// });   })

// // Route to like a post
// app.post('/api/like/:id',(req,res)=>{

// const id = req.params.id;
// db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
//     if(err) {
//    console.log(err)   } 
//    console.log(result)
//     });    
// });

// // Route to delete a post

// app.delete('/api/delete/:id',(req,res)=>{
// const id = req.params.id;

// db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
// if(err) {
// console.log(err)
//         } }) })

// app.listen(PORT, ()=>{
//     console.log(`Server is running on ＄{PORT}`)
// })