import express from 'express'
import cors from 'cors';
import dbConnection from '../database/config.js';
import categoria from '../routes/categoria.js';
import usuario from '../routes/usuario.js';
import articulo from '../routes/articulo.js';
import persona from '../routes/persona.js';



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
    this.app.use('/api/categoria', categoria)
    this.app.use('/api/usuario', usuario)
    this.app.use('/api/articulo', articulo)
    this.app.use('/api/persona', persona)
    }

listen(){
    this.app.listen(this.port,()=>{
        console.log(`servidor corriendo en el puerto ${this.port}`);
    });
}

}

export default Server









