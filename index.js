
//create module reference and create server
let express = require('express');
let app=express();



//tell express to use json middleware
app.use(express.json());

//REST READ
app.get('/blogPost/:id' , (req, res)=>{
    let jsonBlog = {
        "post_id": 12345,
        "post_title": "The title of my first post!",
        "post_text": "Here is some text for this post"
      }
      res.send(jsonBlog)
})

//REST Delete
app.delete('/blogPost/:id' , (req, res)=>{
    let jsonBlog = {
        "post_id": 12345,
        "post_title": "The title of my first post!",
        "post_text": "Here is some text for this post",
        "status": "DELETED"
      }
      res.send(jsonBlog)
});

//REST Create

app.post('/blogPost/:id' , (req, res)=>{
    req.body.status="CREATED"
   
      res.send(req.body)
});

// REST Update

app.put('/blogPost/:id' , (req, res)=>{
    req.body.status="UPDATED"
   
      res.send(req.body)
});

//Create Listener
app.listen(8100, ()=>{
    console.log("listening on ort 8100")
})
