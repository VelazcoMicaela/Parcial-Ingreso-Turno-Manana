/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar()
{
	var respuesta=true;
	var marca;
	var precio;
	var peso;
	var tipo;
	var acumuladorPeso=0;
	var primeraVezPrecio=true;
	var precioMax;
	var marcaMax;
	var primeraVezPeso=true;
	var pesoMin;
	var marcaMinPeso;

	do{
		//marca
		marca=prompt("Ingrese la marca");

		//precio
		do{
			do{
				precio=prompt("Ingrese precio");
				precio=parseInt(precio);
			}while(isNaN(precio));
		}while(precio<0);

		//peso
		do{
			peso=prompt("Ingrese peso en kilogramos");
			peso=parseInt(peso);
		}while(isNaN(peso));

		//tipo
		do{
			tipo=prompt("Ingrese tipo Solido(S) Liquido(L)");
		}while(tipo!="S"&&tipo!="L");

		//a)informar el peso total de la compra.
		acumuladorPeso=acumuladorPeso+peso;

		//b)la marca del más caro de los líquidos
		switch(tipo){
			case "L":
				if (primeraVezPrecio==true){
					precioMax=precio;
					marcaMax=marca;
					primeraVezPrecio=false;
				}
				else{
					if (precio>precioMax){
						precioMax=precio;
						marcaMax=marca;
					}
				}
			break;

			case "S":
				//c)la marca del más liviano de los sólidos
				if (primeraVezPeso==true){
					pesoMin=peso;
					marcaMinPeso=marca;
					primeraVezPeso=false;
				}
				else{
					if (peso<pesoMin){
						pesoMin=peso;
						marcaMinPeso=marca;
					}
				}
			break;
		}



		respuesta=confirm("Desea ingresar mas datos");
	}while(respuesta==true);

	document.write("Peso total compra "+ acumuladorPeso);
	document.write(" Marca "+marcaMax+" mas cara de liquidos "+ precioMax);
	document.write(" Marca "+marcaMinPeso+" del más liviano de los sólidos "+ pesoMin);
}
