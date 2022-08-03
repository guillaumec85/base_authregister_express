const connection = require('../services/connection');

class AuthModel{
   static async add(data){
    const {email,password} = data;
        const result = await connection
        .promise()
        .query(
            'INSERT INTO  users( email , password) VALUES (?,?)',
            [data.email, data.password]
            );
            return result;
    }

    static async getUserByEmail(email){
        const result = await connection
        .promise()
        .query(
            'SELECT * FROM users WHERE email = ?',
            [email]
            );
            return result;
    }
}

module.exports = AuthModel;