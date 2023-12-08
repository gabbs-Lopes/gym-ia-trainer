const { json } = require('body-parser');
const db = require('../db.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports ={
    buscarUsuarios: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM usuario', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    //SELECT ID_USUARIO FROM USUARIO WHERE EMAIL_USUARIO;
    buscarUm: (id) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuario WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_entrada, email_entrada, senha_entrada, tel_entrada, data_entrada, resposta_cad) =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuario', (error, result, res)=>{
                if(error) {rejeitado(error); return; }
                aceito(result);
                let dados = result;

                const emailExiste = dados.some((e) => e.email === email_entrada);
                const telefoneExiste = dados.some((e) => e.telefone_celular === tel_entrada);

                if (emailExiste) {
                    const resposta = { erro: 'Email já existe na base de dados' };
                    rejeitado(resposta);

                    console.log(resposta)
                } else if (telefoneExiste) {
                    const resposta = { erro: 'Telefone já cadastrado na base de dados' };
                    rejeitado(resposta);
                    
                    console.log(resposta)
                } else {
                    const resposta = "Usuario cadastrado com sucesso";
                    
                    bcrypt.hash(senha_entrada, saltRounds, (err, hash) => {
                        db.query('INSERT INTO usuario (nome, email, senha, telefone_celular, data_nascim) VALUES (?, ?, ?, ?, ?)', [nome_entrada, email_entrada, hash, tel_entrada, data_entrada], (error, results) => {
                            if (error) {
                                rejeitado(error);
                                return;
                            }
                            aceito(results.insertEmail, results.resposta);
                        });
                    });

                }
        
                });

            })
   
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
    
    },
    
    excluir: (id)=>{

        return new Promise((aceito, rejeitado)=>{

            db.query('DELETE FROM usuario WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarTreinos: () => {

        return new Promise((aceito, rejeitado) => {
           db.query('SELECT id_treino, nome, FK_id_cat, passo1, passo2, passo3, passo4 FROM treinos a INNER JOIN categoria b ON b.id_cat = a.FK_id_cat', 
            (error, results) => {
            if(error){rejeitado(error); return; }
            aceito(results);
           });
        })
    },

};



