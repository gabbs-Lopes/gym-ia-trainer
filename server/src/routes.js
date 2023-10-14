const express = require('express');
const router = express.Router();
const db = require('./db.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');

const userController = require('./controllers/userController');

router.use(express.json())
router.use(cookieParser())
router.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST, GET"],
        credentials: true
    }
))

router.use(bodyParser.urlencoded({ extended: true }));

router.use(session({
    key: "userId",
    secret: "user", //subscribe
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    },
})
);
router.post('/login', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;


    db.query(
        "SELECT * FROM usuario WHERE email = ?",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                 bcrypt.compare(senha, result[0].senha, (error, response) => {
                    if (response) {
                        req.session.user = result;
                        /* console.log(req.session.user); */
                        res.send(result);
                        /* console.log(result) */
                        /* console.log(req.session.user) */
                    } else {
                        res.send({ message: "Email ou senha incorretos!" });
                    }
                }); 
            } else {
                res.send({ message: "Usuario nao existe" });
            }

            console.log(result)
        },
        

    );// <--- os dados da sessão se perdem aqui.

});


router.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {        
        res.send({ loggedIn: false })
    }
    /* console.log(req.body.email, req.body.senha) */
    /* console.log(req.session.user) */
    /* console.log(sessionTest) */
})                            

router.get('/usuario', userController.buscarUsuarios);
router.get('/usuario_unit/:email', userController.buscarUm);
router.post('/usuario_unit', userController.inserir);



module.exports = router;