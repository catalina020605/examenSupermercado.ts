// controllers/actualizar-estado-pedido-controller.ts
import { Request, Response } from "express";
import PedidoService from "../services/pedidoService"; // Importar servicio de pedidos

const actualizarEstadoPedido = async (req: Request, res: Response) => {
  try {
    const { idOrden, estado } = req.body;

    // Llamar al servicio para actualizar el estado del pedido
    await PedidoService.actualizarEstadoPedido(idOrden, estado);

    return res.status(200).json({
         message: "Estado del pedido actualizado correctamente",
         idOrden
        
        });
  } catch (error: any) {
    console.error("Error al actualizar el estado del pedido:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

export default actualizarEstadoPedido;
