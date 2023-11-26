const db = require('../db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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

    inserir: (nome_entrada, email_entrada, senha_entrada, tel_entrada, data_entrada) =>{
        return new Promise((aceito, rejeitado)=>{

            bcrypt.hash(senha_entrada, saltRounds, (err, hash) =>{
                
                db.query('INSERT INTO usuario (nome, email, senha, telefone_celular, data_nascim) VALUES (?, ?, ?, ?, ?)', [nome_entrada, email_entrada, hash, tel_entrada, data_entrada], (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertEmail);
                    }
                );
                                
            })
   
        });
    
    },

    alterar: (id, nome_entrada, email_entrada, senha_entrada, tel_entrada) =>{
        return new Promise((aceito, rejeitado)=>{

            bcrypt.hash(senha_entrada, saltRounds, (err, hash) =>{
                
                db.query('UPDATE usuario SET nome = ?, email = ?, senha = ?, telefone_celular = ? WHERE id = ?', [nome_entrada, email_entrada, hash, tel_entrada, id],(error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
                    }
                );
                                
            })
   
        });
    
    }
};




