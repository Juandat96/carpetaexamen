
var numero = prompt("Introduzca un valor");
var size = numero;
for (i = 0; i < size; i++){
asteriscos = "";
for (j = 0; j < size; j++){
asteriscos += "*";
}
console.log(size - i + " - " + asteriscos);
}