
//Ejercicio 2
 function Telefono(numero,marca,color,){
  this.numero = numero;
  this.marca = marca;
  this.color = color;
  this.contador = 0;
this.marcar = function(numero) {
		this.contador++;
	}
};

var iphone= new Telefono(81828485,"apple","azul")


