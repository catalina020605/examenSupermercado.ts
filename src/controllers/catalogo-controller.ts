// src/controllers/menuController.ts

import { Request, Response } from 'express';
import catalogoData from '../data/catalogo-data';

class MenuController {
    static getMenuList(req: Request, res: Response) {
        res.json(catalogoData);
    }
}

export default MenuController;
