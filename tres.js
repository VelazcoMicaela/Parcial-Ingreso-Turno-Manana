/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta= true;
	var nombre;
	var lugar;
	var temporada;
	var cantidad;
	var contadorBariloche=0;
	var contadorCataratas=0;
	var contadorSalta=0;
	var masElegido;
	var lugarMasElegido;
	var primeraVezCantidad=true;
	var nombreMax;
	var cantidadMax;
	var contadorInvierno=0;
	var acumuladorInvierno=0;
	var promedioInvierno;


	do{
		//nombre
		nombre=prompt("Ingresar nombre");

		//lugar
		do{
			lugar=prompt("Ingrese lugar Bariloche(B) Cataratas(C) Salta(S)");
		}while(lugar!="B"&&lugar!="C"&&lugar!="S");

		//temporada
		do{
			temporada=prompt("Ingrese temporada Invierno(I) Otoño(O) Verano(V) Primavera(P)");
		}while(temporada!="O"&&temporada!="I"&&temporada!="V"&&temporada!="P");

		//cantidad
		do{
			cantidad=prompt("Ingrese cantidad");
			cantidad=parseInt(cantidad);
		}while(isNaN(cantidad));

		//a)el lugar más elegido
		switch(lugar){
			case "B":
				contadorBariloche++;
			break;

			case "C":
				contadorCataratas++;
			break;

			case "S":
				contadorSalta++;
			break;
		}

		//b)el nombre de titular que lleva más pasajeros.
		if (primeraVezCantidad==true){
			nombreMax=nombre;
			cantidadMax=cantidad;
			primeraVezCantidad=false;
		}
		else{
			if (cantidad>cantidadMax){
				nombreMax=nombre;
				cantidadMax=cantidad;
			}
		}
		
		//c)el promedio de personas por viaje,  que viajan en invierno
		switch(temporada){
			case "I":
				contadorInvierno++;
				acumuladorInvierno=acumuladorInvierno+cantidad;
			break;
		}



		respuesta=confirm("Ingresar mas datos");

	}while(respuesta==true);

	//a)el lugar más elegido
	if(contadorBariloche>contadorCataratas&&contadorBariloche>contadorSalta){
		masElegido=contadorBariloche;
		lugarMasElegido="Bariloche";
	}else{
		if (contadorCataratas>contadorSalta) {
			masElegido=contadorCataratas;
			lugarMasElegido="Cataratas";
		}else{
			masElegido=contadorSalta;
			lugarMasElegido="Salta";
		}
	}

	promedioInvierno=acumuladorInvierno/contadorInvierno;

	document.write("Lugar "+lugarMasElegido+" mas elegido "+masElegido);
	document.write(" Nombre "+nombreMax+" cantidad max "+cantidadMax);
	document.write(" Promedio "+promedioInvierno);

}
