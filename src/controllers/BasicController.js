const BasicService = require('../services/BasicService')

module.exports = {
    sAll: async (req,res) => {
        let json = {
            error:'',
            result:[]
        }

        let objects = await BasicService.getAll();

        for(let i in objects){
            json.result.push({
                codigo: objects[i].codigo,
                email: objects[i].email
            });
        }
        res.json(json);
    },

    sOne: async (req,res) => {
        let json = {
            error:'',
            result:[]
        }

        let email = req.body.email
        let senha = req.body.senha
        console.log(email,senha)
        if(email && senha){
            let response = await BasicService.getOne(email,senha);
            if(response){json.result = response}
        }else{
            json.error = "campos nao enviados"
        }



        res.json(json);
        
    },

    createUser: async (req,res) => {
        let json = {
            error:'',
            result:[]
        }

        let email = req.body.email
        let senha = req.body.senha
        if(email && senha){
            let response = await BasicService.insertOne(email,senha);
            if(response){json.result = response}
        }else{
            json.error = "campos nao enviados"
        }



        res.json(json);
        
    }
}