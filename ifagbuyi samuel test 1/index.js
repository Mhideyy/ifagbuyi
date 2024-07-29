// importing express into  this file
const express = require('express')

// extracting the values of express to app
const app = express();

// middle ware
app.use(express.json());

const myArtist = [
    {id: 1, name: 'John Doe', genre: 'Rock'},
    {id: 2, name: 'Jane Doe', genre: 'Pop'},
    {id: 3, name: 'Jim Doe', genre: 'Hip-Hop'}
]

app.get('/get', (req,res)=>{
    res.json(myArtist)});

app.post('/post', (req,res)=>{
    const body = req.body;
    console.log(body);
    myArtist.push(body);
    res.json({message: 'body  passed successfully'});
});

app.put('/put', (req,res)=>{
    const body = req.body;
    console.log(body);
    myArtist.push(body);
    res.json({message: 'update successfully'});  
});

app.delete('/delete', (req,res)=>{
    res.json({message: "deleted successfully"})
})


app.listen('2000', ()=>{
    console.log('Server is running on port 2000');
})



