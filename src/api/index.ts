import express from "express";
import userRoutes from "./usuario/usuario.routes";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req,res) => {
    res.send('Hello world!!')
});

app.use('/api/user', userRoutes) //error

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});