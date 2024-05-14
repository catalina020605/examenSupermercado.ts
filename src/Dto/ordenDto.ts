// Dto/pedidoDto.ts
class Pedido {
    private _idproducto: number;
    private _direccion: string;
    private _email: string;
    private _estado: string;

    constructor(idproducto: number, direccion: string, email: string, estado: string) {
        this._idproducto = idproducto;
        this._direccion = direccion;
        this._email = email;
        this._estado = estado;
    }

    get idproducto(): number {
        return this._idproducto;
    }

    set idprodcuto(value: number) {
        this._idproducto = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get estado(): string {
        return this._estado;
    }

    set estado(value: string) {
        this._estado = value;
    }
}

export default Pedido;
