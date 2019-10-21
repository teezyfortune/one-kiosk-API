import bcrypt from  'bcrypt';
import jwt from 'jsonwebtoken';

export default class helperController {
      static encryptPassword(password){
         return  bcrypt.hashSync(password, 10);
      }

      static comparePassWord(password, hashedPassword){
         return bcrypt.compareSync(password, hashedPassword)
      }

}