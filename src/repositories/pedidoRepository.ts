// repositories/PedidoRepository.ts
import db from "../config/config-db";
import Orden from "../Dto/ordenDto";

class PedidoRepository {
  static async guardarPedido(orden: Orden) {
    try {
      const sql =
        "INSERT INTO orden (idproducto, direccion, email) VALUES (?, ?, ?)";
      const values = [orden.idproducto, orden.direccion, orden.email];
      const resultado = await db.execute(sql, values);
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPedidosPorCliente(email: string) {
    try {
      const sql = "SELECT * FROM orden WHERE email = ?";
      const [rows] = await db.execute(sql, [email]);
      return rows;
    } catch (error) {
      throw error;
    }
  }


  static async actualizarEstadoPedido(idOrden: number, estado: string) {
    try {
        const sql = "UPDATE orden SET estado = ? WHERE idorden = ?";
        const values = [estado, idOrden];
        const resultado = await db.execute(sql, values);
        return resultado;
    } catch (error) {
        throw error;
    }
}

}

export default PedidoRepository;
