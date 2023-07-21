
const userService = require('../services/userService');

module.exports = {
    buscarUsuarios: async (req, res)=> {
        let json = {error:'', result:[]};

        let usuario = await userService.buscarUsuarios();

        for(let i in usuario){
            json.result.push({
                email: usuario[i].email,
                senha: usuario[i].senha
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) =>{
        let json = {error:'', result:{}};

        let email = req.params.email;
        let usuario_unit = await userService.buscarUm(email);

        if(usuario_unit){
            json.result = usuario_unit;
        }
        res.json(json);
    },

    inserir: async(req, res) =>{
        let json = {error:'', result:{}};

        let email_entrada = req.body.email;
        let senha_entrada = req.body.senha;

        console.log(`email: "${email_entrada}" senha: "${senha_entrada}"`)

        if(email_entrada && senha_entrada){
            let cadastro_user = await userService.inserir(email_entrada, senha_entrada);
            json.result = {
                login: cadastro_user,
                email_entrada,
                senha_entrada
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
}