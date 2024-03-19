import express from "express";
import {userController} from '../usuario/usuario.controller';

const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers)
userRoutes.get('/:id',userController.getUserById)

export default userRoutes