const db = require('../db')


module.exports = {
    getAll: () => {
        return new Promise((accepted,rejected) =>{
            db.query(`select email from btable`,(error,results) => {
                if(error){rejected(error);return;}
                accepted(results)
            })
        })
    },

    getOne: (email,senha) => {
        console.log(`select email from btable where email = "${email}" and senha = "${senha}" `)
        return new Promise((accepted,rejected) =>{
            db.query(`select email from btable where email = "${email}" and senha = "${senha}" `,(error,results) => {
                if(error){rejected(error);return;}
                if(results.length > 0){
                    accepted(results[0])
                }else{
                    accepted(false)
                }
            })
        })
    },

    insertOne: (email,senha) => {
        return new Promise((accepted,rejected) =>{
            db.query(`insert into btable (email,senha) values("${email}","${senha}") `,(error,results) => {
                if(error){rejected(error);return;}
                accepted(results.insertCodigo)
            })
        })
    }
}