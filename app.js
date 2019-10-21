import express from 'express';
import bodyParser from  'body-parser';
import dotenv from 'dotenv';
import models from './server/models/index';
import router from './server/Router'


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


 app.use('/api/v1', router)

const port = process.env.PORT|| NODE_ENVIRONMENT
app.listen(port, () => console.log(`sever listening on port ${port}`))

export default app;