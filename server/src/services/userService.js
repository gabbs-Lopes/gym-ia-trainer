const db = require('../db.js');
module.exports ={
    buscarUsuarios: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT *FROM usuario', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (email) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT *FROM usuario WHERE email = ?', [email], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (email_entrada, senha_entrada) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO usuario (email, senha) VALUES (?, ?)', [email_entrada, senha_entrada], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertEmail);
                
                }
            );
        });
    }
};

/* function login (email, senha){
    db.query('SELECT *FROM usuario WHERE email = ?' [email],)
} */ 