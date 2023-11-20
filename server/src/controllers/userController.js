
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
        let nome_entrada = req.body.nome;
        let tel_entrada = req.body.tel;
        let data_entrada = req.body.data;

        console.log(`email: "${email_entrada}" senha: "${senha_entrada}" "telefone:"${tel_entrada}"nome:"${nome_entrada}`)

        if(email_entrada && senha_entrada){
            let cadastro_user = await userService.inserir(nome_entrada, email_entrada, senha_entrada, tel_entrada, data_entrada);
            json.result = {
                login: cadastro_user,
                nome_entrada,
                email_entrada,
                senha_entrada,
                tel_entrada,
                data_entrada
                
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) =>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let email_entrada = req.body.email;
        let senha_entrada = req.body.senha;
        let nome_entrada = req.body.nome;
        let tel_entrada = /* req.body.tel */11995185096;

        console.log(`email: "${email_entrada}" senha: "${senha_entrada}" "telefone:"${tel_entrada}"nome:"${nome_entrada}`)

        if(id || tel_entrada || nome_entrada || email_entrada || senha_entrada){
            await userService.alterar(id, nome_entrada, email_entrada, senha_entrada, tel_entrada);
            json.result = {
                id,
                nome_entrada,
                email_entrada,
                senha_entrada,
                tel_entrada            
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    Headers() {
        return [
            {
                source: '/path*',
                headers: [
                    {key: 'Access-Control-Allow-Credencials', value: 'true'},
                    {key: 'Access-Control-Allow-Origin', value: '*'},
                    {key: 'Access-Control-Allow-Methods', value: 'GET,POST,PATCH,DELETE,PUT,OPTIONS'},
                    {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token'}
                ]
            }
        ]
    }
}