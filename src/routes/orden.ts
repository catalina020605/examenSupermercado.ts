// routes/pedido.ts
import express from "express";
import ordenController from '../controllers/pedido-controller';
const router = express.Router();

router.post('/orden', ordenController); // Usamos la función de controlador directamente

export default router;
