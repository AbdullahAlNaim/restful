const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const { v4: uuid } = require('uuid');


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'I like fishes!'
    },
    {
        id: uuid(),
        username: 'Vinc',
        comment: 'Playing soccer is fun!'
    },
    {
        id: uuid(),
        username: 'Charlie',
        comment: 'Learning how to code its so cool!'
    },
    {
        id: uuid(),
        username: 'Bobby',
        comment: 'Is a random trainer'
    }
]

//these are routes
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/getpost.html'));
})

app.post('/comments', (req, res) => {
    //console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})


app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    const foundComment = comment.find(c => c.id === id);
    foundComment.comment = newCommentText;
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    //const comment = comments.find(c => c.id === id);
})

app.get('/tacos', (req, res) => {
    res.send('Get /tacos response');
})

app.post('/tacos', (req, res) => {
    console.log(req.body);
    res.send('Post /tacos response');
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})