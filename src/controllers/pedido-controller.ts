// controllers/pedido-controller.ts
import { Request, Response } from "express";
import ordenService from "../services/pedidoService"; // Importamos la función del servicio
import orden from "../Dto/ordenDto";
import jwt from "jsonwebtoken"; // Importamos jwt para decodificar el token

const hacerPedido = async (req: Request, res: Response) => {
  try {
    const { idproducto, direccion, estado } = req.body;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded: any = jwt.verify(token, process.env.SECRET_KEY || "");

    const email = decoded.email;

    const pedido = new orden(idproducto, direccion, email, estado);
    const resultado = await ordenService.hacerPedido(pedido);

    return res.status(201).send({
      status: "Pedido realizado exitosamente",
      token,
    });
  } catch (error: any) {
    console.error("Error al hacer el pedido:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

export default hacerPedido;
