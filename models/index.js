import sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();
const  config = new sequelize(process.env.DB_DBNAME, process.env.DB_USER, process.env.DB_PASSWORD, {
     dialet:'postgres',
})

config.authenticate().then( () =>{
console.log('connected to db')
}).catch( (err) => err)


export default app;