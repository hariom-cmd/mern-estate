import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then( () =>{
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});

const app = express();


// this will alow json as ipnput at the server
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
    }
);


// All the routes should be defined in index.js


// here req -> made by the browser by the user AND res -> response is send by the server to the client
// this api route is related to the api we want to go that specific location(we create a proxy later)
app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);