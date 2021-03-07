import {} from 'dotenv/config.js'
import Server from './models/Server.js'

const server = new Server();

server.listen();










































//import express from 'express'
//import cors from 'cors'

/*let app= express();
app.use(express.json());
app.use(cors);


app.get('/', function(req,res) {
const {token}=req.headers;
res.json({ mensaje: 'sirviendo get',token:token});
    
});

app.get('/saludeme', function(req,res) {
    console.log(req.query);
    const {nombre,edad} = req.query;
    res.json({ mensaje: `hola ${nombre}, tiene ${edad} años`});
    
});
app.post('/', function(req,res) {
    console.log(req.body);
    const {apellido}=req.body
    res.json({
        mensaje: 'registro añadido correctamente',
        usuario:req.body
    });
});
app.put('/', function(req,res) {
    res.json({  mensaje: 'sirviendo put'});
});
app.delete('/', function(req,res) {
        res.json({  mensaje: 'sirviendo delete'});
});

app.delete('/:id', function(req,res) {
console.log(req.params);
const {id}=req.params;
    res.json({  mensaje: 'sirviendo delete',id:id});
    
});

app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});*/