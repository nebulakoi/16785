//Calcular iva de un producto

alert("Bienvenido al calculador. Ingrese el valor del producto para saber cuanto pagará finalmente.")
const sumar  = (a,b) => a + b;
const restar = (a,b) => a - b;
const iva   = x => x * 0.19;
let precioProducto  = Number(prompt("Ingrese el valor de su producto")); 
let precioDescuento = precioProducto * 0.1;  

// Se calcula el precio del producto consultado mas IVA menos el decuento del 10%
let nuevoPrecio = restar(sumar(precioProducto, iva(precioProducto)), precioDescuento); 
console.log(nuevoPrecio);
alert(`El valor de su producto mas IVA es $${nuevoPrecio}. Se ha aplicado un descuento de cliente frecuente del 10%.`);