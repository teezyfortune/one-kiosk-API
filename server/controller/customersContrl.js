    import {customer} from '../models'
    import {encryptPassword, comparePassWord} from '../helpers/index';

 export default class customerController {
static createCustomer(req, res){
    const {title,name,email,password} = req.body;
    return   customer
       .findOne({
            where:{email:req.body.email},
            attributes:['id',[title, name,email,password]]
        }).then((user) =>{
            if(user){
                res.json(409).send({
                    status: 'conflict',
                    message: 'user exist'
                })
            } else {
        const hash = encryptPassword(password)
         const password = hash;
        customer.create({
            title: req.body.title,
             name:req.body.name,
             email:req.body.email,
             password:req.body.password,
            })
        }
        },(newUser, error) => {
            if(error){
                res.send(err)
            }else{
            res.status(201).send({
                status:201,
                user:{
                title:newUser.title,
                name: newUser.email,
                email: newUser.email,
                },
            })
        }
        })    
    }
}
