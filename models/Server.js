import express from 'express'
import cors from 'cors';
import dbConnection from '../database/config.js';


class Server{
    constructor(){
        this.port=process.env.PORT;
        this.app= express();
        this.conectarBD();
        this.middlewares();
        this.routes();
    }
async conectarBD(){
await dbConnection();
}


middlewares(){
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static('public'));
}


routes(){

}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`servidor corriendo en el puerto ${this.port}`);
    });
}

}

export default Server









