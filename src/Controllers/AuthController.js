const AuthModel = require('../Models/AuthModel');
const bcrypt = require('bcrypt');

class AuthController{
    static async register(req,res){
        try{
            const {email ,password} = req.body;
            const getMail = await AuthModel.getUserByEmail(email);

            if(getMail[0].length > 0){
                res.status(400).send('email already exist');
            }
            const hash = await bcrypt.hash(password,10);
         AuthModel.add({email,password: hash });
        res.status(201).json({
            message:"User created",
            
 });
        }catch(err){
            res.status(400).json({
                message:err.message,
            });
        }
        
   
        
    }
}
module.exports = AuthController;