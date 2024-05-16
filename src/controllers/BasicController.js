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

        if(email && senha){
            let response = await BasicService.getOne(email,senha);
            json.result = response
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
        let senha = req.body.pass
        let city = req.body.city
        let address = req.body.add
        let reference = req.body.ref
        if(email && senha && city && address && reference){
            let response = await BasicService.insertOne(email,senha,city,address,reference);
            if(response){json.result = response}
        }else{
            json.error = "campos nao enviados"
        }



        res.json(json);
        
    }
}