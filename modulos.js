import { Usuario, UsuarioVip } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";

let User1 = new Usuario ("Carlos","Carlos@gmail.com");
let User2 = new Usuario ("William","William@gmail.com");
let User3 = new UsuarioVip("Simon","Simon@gmail.com","Gold");

let Producto1 = new Producto("Jabon", 4200 , "Aseo");
let Producto2 = new Producto("Coca Cola 1.5L", 6400 , "Bebida");
let Productodigital1 = new ProductoDigital("Netflix",26000,"Mensual");
let Productodigital2 = new ProductoDigital("Office 2025",226000,"Anual");

console.log(User1.resumen());
User2.desactivar();
console.log(User2.resumen());

console.log(Producto2.aplicarDescuento(20));


console.log(Producto1.tarjeta());
console.log(Producto2.tarjeta());
console.log(Productodigital1.tarjeta());
console.log(Productodigital2.tarjeta());


console.log(Producto1.resumen());
console.log(Producto2.resumen());
console.log(Productodigital1.resumen());
console.log(Productodigital2.resumen());





