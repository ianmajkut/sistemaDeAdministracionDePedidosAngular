import { PedidoDetalle } from "./pedido-detalle";

export class Pedido{
    clienteId!: number;
    pedidoId!: number;
    nombreCliente: string = "";
    total!: number;
    pedidoDetalle: Array<PedidoDetalle>

    constructor(){
        this.pedidoDetalle = new Array<PedidoDetalle>()
    }

    
}