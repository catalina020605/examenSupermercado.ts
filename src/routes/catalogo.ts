// src/routes/menuRoutes.ts

import express from 'express';
import catalogoController from '../controllers/catalogo-controller';

const router = express.Router();

// Endpoint para obtener la lista de menús disponibles
router.get('/catalogo', catalogoController.getMenuList);

export default router;
