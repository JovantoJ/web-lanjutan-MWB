var express = require('express');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
var app = express();

let nomorToken = 'randomtoken';

app.use(bodyParser.json());

let authJWT = (req, res, next) => {
    let authHeader = req.headers.authorization;

    if (authHeader) {
        let token = authHeader.split(' ')[1];

        jwt.verify(token, nomorToken, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    }
]

app.get('/books', authJWT, (req, res) => {
    res.json(books);
});

app.post('/books', authJWT, (req, res) => {
    let { role } = req.user;

    if (role !== 'admin') {
        return res.sendStatus(403);
    }


    let book = req.body;
    books.push(book);

    res.send('Buku berhasil ditambahkan');
});

app.listen(5500, () => {
    console.log('Server Berjalan');
});