const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4040;

app.get('/', (req, res) => {
    res.send('App Page')
})

// Color contrast paths
app.get('/color', (req, res) => {
    res.sendFile(path.join(__dirname + '/color-contrast/good-color-contrast.html'));
    app.use(express.static(__dirname + '/color-contrast'))
});

app.get('/color-bad', (req, res) => {
    res.sendFile(path.join(__dirname + '/color-contrast/bad-color-contrast.html'));
    app.use(express.static(__dirname + '/color-contrast'))
});

// Color information
app.get('/color-info', (req, res) => {
    res.sendFile(path.join(__dirname + '/communicate-info/good-communicate-info.html'));
    app.use(express.static(__dirname + '/communicate-info'))
});

app.get('/color-info-bad', (req, res) => {
    res.sendFile(path.join(__dirname + '/communicate-info/bad-communicate-info.html'));
    app.use(express.static(__dirname + '/communicate-info'))
});

// Form labeling
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/form-labeling/good-form-labeling.html'));
    app.use(express.static(__dirname + '/form-labeling'))
});

app.get('/form-bad', (req, res) => {
    res.sendFile(path.join(__dirname + '/form-labeling/bad-form-labeling.html'));
    app.use(express.static(__dirname + '/form-labeling'))
});

// Page structure
app.get('/pagestructure', (req, res) => {
    res.sendFile(path.join(__dirname + '/page-structure/good-page-structure.html'));
    app.use(express.static(__dirname + '/page-structure'))
});

app.get('/pagestructure-bad', (req, res) => {
    res.sendFile(path.join(__dirname + '/page-structure/bad-page-structure.html'));
    app.use(express.static(__dirname + '/page-structure'))
});

// Images
app.get('/images', (req, res) => {
    res.sendFile(path.join(__dirname + '/images/images-good.html'));
    app.use(express.static(__dirname + '/images'))
});

app.get('/images-bad', (req, res) => {
    res.sendFile(path.join(__dirname + '/images/images-bad.html'));
    app.use(express.static(__dirname + '/images'))
});

// Semantic HTML
app.get('/semantic', (req, res) => {
    res.sendFile(path.join(__dirname + '/semantic-html/good-html-semantic.html'));
    app.use(express.static(__dirname + '/semantic-html'))
});

app.get('/semantic-aria', (req, res) => {
    res.sendFile(path.join(__dirname + '/semantic-html/aria-html-semantic.html'));
    app.use(express.static(__dirname + '/semantic-html'))
});

app.get('/semantic-bad', (req, res) => {
    res.sendFile(path.join(__dirname + '/semantic-html/bad-html-semantic.html'));
    app.use(express.static(__dirname + '/semantic-html'))
});

app.listen(port, (err) => {
    if (err) console.log('Cannot connect to port');

    console.log(`Connected to port ${port}`)
})

