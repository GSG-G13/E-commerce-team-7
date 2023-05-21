import connection from "../../database/config/connection.js";
import loginSchema from "../../utils/index.js";
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    const alers = [];
    try{
     const validate = await loginSchema.validateAsync(req.body);
     if(validate) {
      const {email, password} = req.body;
      const checkEmailQ = await connection.query('SELECT * FROM users WHERE email = $1', 
          [email]);
      const user = await checkEmailQ.rows;
      if(user.length === 0){
        alers.push('Email not found')
        return res.status(403).json(alers)
      }
      const payload = {id: user[0].id, email, name: user[0].name, role: user[0].Role};
      const validPass = await bcrypt.compare(password, user[0].password);
      if(!validPass){
        alers.push('Wrong Password');
        return res.status(403).json(alers)
      }
      if(payload.email && validPass) {
          const token = await jwt.sign(payload,process.env.SECRET);
          alers.push('Log in Successfull')
          res.status(200).cookie('token', token).json(alers)
      }
     }
    }
    catch (error){
      alers.push(error.details)
      const alerts = alers[0].map(({message}) => message);
      res.status(403).json(alerts);
    }
};

export default login;