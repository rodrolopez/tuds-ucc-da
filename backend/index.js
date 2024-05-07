import express from 'express';

const app = express();
const port = 4000;

app.get('/',(req,res) => {
    res.send('hola mundo')
})

app.listen(
    port,
    () => console.log(
        `el servidor está aceptando conexiones en el puerto ${port}`
    )
);