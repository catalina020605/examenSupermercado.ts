// routes.ts

import express from "express";
import actualizarEstadoPedidoController from "../controllers/actualizar-estado-pedido-controller"; // Importar controlador de actualización de estado

const router = express.Router();

// Ruta para actualizar el estado de un pedido pendiente
router.put("/actualizarEstado",actualizarEstadoPedidoController
);

export default router;
