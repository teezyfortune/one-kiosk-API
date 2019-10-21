import jwt from 'jsonwebtoken';



 export default class checkAuthentication {
    static iLoggedIn(req, res, next) {
        const token = req.headers.Authirization;
         const userToken = token.split(' ');
            const BearerToken = userToken[1];
            req.token = BearerToken
         jwt.verify(BearerToken, process.env.SECRET_KEY, {exp:'30d'}, (decoded, error) => {
             if(error){
                 res.status(403).send({
                    message: 'you are not loggedin',
                 })
             }else {
                req.user = decoded;
                return next()
             }
         })
    }
 }