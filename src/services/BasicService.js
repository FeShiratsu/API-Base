const db = require('../db')


module.exports = {
    getAll: () => {
        return new Promise((accepted,rejected) =>{
            db.query(`select email from btable`,(error,results) => {
                if(error){rejected(error);return;}
                accepted(results)
            })
        })
    }
}