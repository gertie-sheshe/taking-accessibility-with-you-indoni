const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4040;

app.get('/', (req, res) => {
    res.send('App Page')
})

// Color contrast paths
app.use('/color', (req, res) => {
    app.use(express.static(__dirname + '/color-contrast'));
    res.sendFile(path.join(__dirname + '/color-contrast/good-color-contrast.html'));  
});

app.get('/color-bad', (req, res) => {
    app.use(express.static(__dirname + '/color-contrast'));
    res.sendFile(path.join(__dirname + '/color-contrast/bad-color-contrast.html'));
});

// Color information
app.get('/info', (req, res) => {
    app.use(express.static(__dirname + '/communicate-info'));
    res.sendFile(path.join(__dirname + '/communicate-info/good-communicate-info.html'));
});

app.get('/info-bad', (req, res) => {
    app.use(express.static(__dirname + '/communicate-info'));
    res.sendFile(path.join(__dirname + '/communicate-info/bad-communicate-info.html'));
});

// Form labeling
app.get('/form', (req, res) => {
    app.use(express.static(__dirname + '/form-labeling'));
    res.sendFile(path.join(__dirname + '/form-labeling/good-form-labeling.html'));
});

app.get('/form-bad', (req, res) => {
    app.use(express.static(__dirname + '/form-labeling'));
    res.sendFile(path.join(__dirname + '/form-labeling/bad-form-labeling.html'));
});

// Page structure
app.get('/pagestructure', (req, res) => {
    app.use(express.static(__dirname + '/page-structure'));
    res.sendFile(path.join(__dirname + '/page-structure/good-page-structure.html'));
});

app.get('/pagestructure-bad', (req, res) => {
    app.use(express.static(__dirname + '/page-structure'));
    res.sendFile(path.join(__dirname + '/page-structure/bad-page-structure.html'));
});

// Images
app.get('/images', (req, res) => {
    app.use(express.static(__dirname + '/images'));
    res.sendFile(path.join(__dirname + '/images/images-good.html'));
});

app.get('/images-bad', (req, res) => {
    app.use(express.static(__dirname + '/images'));
    res.sendFile(path.join(__dirname + '/images/images-bad.html'));
});

// Semantic HTML
app.get('/semantic', (req, res) => {
    app.use(express.static(__dirname + '/semantic-html'));
    res.sendFile(path.join(__dirname + '/semantic-html/good-html-semantic.html'));
});

app.get('/semantic-aria', (req, res) => {
    app.use(express.static(__dirname + '/semantic-html'));
    res.sendFile(path.join(__dirname + '/semantic-html/aria-html-semantic.html'));
});

app.get('/semantic-bad', (req, res) => {
    app.use(express.static(__dirname + '/semantic-html'));
    res.sendFile(path.join(__dirname + '/semantic-html/bad-html-semantic.html'));
});

app.listen(port, (err) => {
    if (err) console.log('Cannot connect to port');

    console.log(`Connected to port ${port}`)
})

