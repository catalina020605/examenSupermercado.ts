import db from "../config/config-db";
import User from "../Dto/UserDto";
import Auth from "../Dto/authDto";

class UserRepository {

  static async add(user: User) {
    
    const sql =
      "INSERT INTO comprador (documento, email, nombres, telefono, password) VALUES (?, ?, ?, ?, ?)";

    const values = [
      user.documento,
      user.email,
      user.nombres,
      user.telefono,
      user.password,
    ];

    return db.execute(sql, values);
  }

  static async login(auth: Auth) {
    const sql = "SELECT password FROM comprador WHERE email=?";
    const values = [auth.email];
    return db.execute(sql, values);
  }
}

export default UserRepository;
