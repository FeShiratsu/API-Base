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
                    accepted("Login succeeded")
                }else{
                    accepted("Rejected login")
                }
            })
        })
    },

    insertOne: (email,senha,city,address,reference) => {
        return new Promise((accepted,rejected) =>{
            db.query(`insert into btable (email,senha,city,address,reference) values("${email}","${senha}","${city}","${address}","${reference}") `,(error,results) => {
                if(error){rejected(error);return;}
                accepted(("Succeeded register"))
            })
        })
    }
}