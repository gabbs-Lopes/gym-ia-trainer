const express = require('express');
const router = express.Router();
const db = require('./db.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const multer  = require('multer');
const path = require('path');


const userController = require('./controllers/userController');

router.use(express.json())
router.use(cookieParser())
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static('public'));


router.use(bodyParser.urlencoded({ extended: true }));
router.post('/login', (req, res) =>{
    const sql = 'SELECT *FROM usuario WHERE email = ?';
     db.query(sql, [req.body.email], (err, data) => {
        
        if(err) return res.json({Error: "Login error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.senha.toString(), data[0].senha, (err, response) =>{
                
                if(err) return res.json({Error: "Password compare error"});
                if(response){
                    const id = data[0].id
                    const token = jwt.sign({id}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success", token: token});
                }else{
                    return res.json({Error: "Password not matched"});
                }
            })
        }else{
            return res.json({Error: "No email existed"});
        }
    })
})

const verifyUser = (req, res, next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Error: "You're not authentincated"})
    }else{
        jwt.verify(token, "jwt-secret-key", (err, decoded) =>{
            if(err){
                return res.json({Error: "Token is not okey"});
            }else{
                req.id = decoded.id;
                console.log(decoded.id)
                next();
            }
        })
    }
}


router.get('/verify', verifyUser, (req, res) => {
    return res.json({Status: "Success", id: req.id});
})

router.get('/logout', (req, res)=>{
    res.clearCookie('token');
    return res.json({Status: "Success"});
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/imagens')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }

})
const upload = multer({ storage: storage });

// Rota para upload de imagem
router.post('/upload', upload.single('imagem'), (req, res) => {
  try {
    const image = req.file;

    // Aqui, você pode salvar a imagem, processá-la, etc.

    res.status(200).send('Imagem recebida com sucesso!');
  } catch (error) {
    console.error('Erro durante o processamento da imagem:', error);
    res.status(500).send('Erro interno ao processar a imagem.');
  }
});

router.get('/usuario', userController.buscarUsuarios);
router.get('/usuario_unit/:id', userController.buscarUm);
router.post('/usuario_unit', userController.inserir);
router.put('/usuario_unit/:id', userController.alterar);
router.delete('/usuario_unit/:id', userController.excluir);
router.get('/treinos/', userController.buscarTreinos);


module.exports = router;







