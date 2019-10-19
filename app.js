import express from 'express';
import bodyParser from  'bodyParser';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencode(), {extended:false})

