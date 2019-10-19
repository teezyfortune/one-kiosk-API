import express from 'express';
import bodyParser from  'body-parser';
import dotenv from 'dotenv';
import models from './backend/server/models/index.js'

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.PORT|| NODE_ENVIRONMENT
app.listen(port, () => console.log(`sever listening on port ${port}`))