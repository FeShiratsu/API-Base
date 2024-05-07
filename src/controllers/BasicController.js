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
    }
}