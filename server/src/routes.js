const express = require('express');
const router = express.Router();
const db = require('./db.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');

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
    resave: true, //false
    saveUninitialized: true //,false
    ,cookie: {
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
                        res.send(result);
                        console.log(result);
                    } else {
                        res.send({ message: "Email ou senha incorretos!" });
                    }
                }); 
            } else {
                res.send({ message: "Usuario nao existe" });
            }
               
        },  
        

    );// <--- os dados da sessão se perdem aqui.
            
});

router.get('/loggedin', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {        
        res.send({ loggedIn: false })
    }
    
})    
               
router.get('/perfil', (req,res) =>{
    return res.json({Status: "Sucesso", id: "id"})
})

router.get('/usuario', userController.buscarUsuarios);
router.get('/usuario_unit/:email', userController.buscarUm);
router.post('/usuario_unit', userController.inserir);
router.put('/usuario_unit/:id', userController.alterar);

module.exports = router;

