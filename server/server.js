import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import MongoDbStore from 'connect-mongo';
import { ApolloServer } from 'apollo-server-express';
import body_parser from 'body-parser'
import { fileURLToPath } from 'url';


import dataRouter from './routes/GetData.router.js';
import messageRouter from './routes/Messages.route.js';
import config from './config/config.js';

const json = express.json;

const app = express();

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(json());
app.use(
    session({
        secret: 'something',
        resave: true,
        saveUninitialized: false,
        store: MongoDbStore.create({
            mongoUrl: config.BASE_DB_URL
        })
    })
);
app.use(dataRouter);
app.use(messageRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if(config.NODE_ENV === 'production'){
  console.log('Im im prod');
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    })
}

const start = async () => {
    try{
        await mongoose.connect(config.BASE_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
        app.listen(process.env.PORT || config.PORT, () => console.log('Server is listening on: ', config.PORT));
      }catch(err){
        console.error(err);
    }
}

start();