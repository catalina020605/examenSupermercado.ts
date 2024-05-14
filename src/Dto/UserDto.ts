class User {
    private _documento:string;
    private _email: string;
    private _nombres: string;
    private _telefono: string;
    private _password: string;

    constructor(documento: string, email: string, nombres: string, telefono: string, password: string) {
        this._documento=documento;
        this._email = email;
        this._nombres = nombres;
        this._telefono = telefono;
        this._password = password;
    }

    get documento(): string {
        return this._documento;
    }

    set documento(value: string) {
        this._documento = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get nombres(): string {
        return this._nombres;
    }

    set nombres(value: string) {
        this._nombres = value;
    }

    get telefono(): string {
        return this._telefono;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}

export default User;
