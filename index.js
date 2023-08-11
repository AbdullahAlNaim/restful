const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const comments = [
    {
        username: 'Todd',
        comment: 'I like fishes!'
    },
    {
        username: 'Vinc',
        comment: 'Playing soccer is fun!'
    },
    {
        username: 'Charlie',
        comment: 'Learning how to code its so cool!'
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
    console.log(req.body);
    res.send('IT WORKS')
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