/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contadorVueltas=0;
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contadorFemenino=0;
	var contadorMasculino=0;
	var acumuladorEdad=0;
	var contadorTotal;
	var promedioEdad;
	var primeraVezTemperatura=true;
	var temperaturaMax;

	do{
		//Nombre
		nombre=prompt("Ingrese su nombre");

		//temperatura
		do{
			temperatura=prompt("Ingrese temperatura");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura));

		//sexo
		do{
			sexo=prompt("Ingrese sexo Femenino(F) Masculino(M)");
		}while(sexo!="F"&&sexo!="M");

		//edad
		do{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}while(isNaN(edad));


		//a)informar la cantidad de personas de cada sexo.
		switch(sexo){
			case "F":
				contadorFemenino++;

				//c)la mujer con más temperatura(si la hay)
				if (primeraVezTemperatura==true){
					temperaturaMax=temperatura;
					primeraVezTemperatura=false;
				}
				else{
					if (temperatura>temperaturaMax){
						temperaturaMax=temperatura;
					}
				}

			break;

			case "M":
				contadorMasculino++;
			break;
		}

//b)la edad promedio en total
		acumuladorEdad=acumuladorEdad+edad;



		contadorVueltas++;
		alert(contadorVueltas);
	}while(contadorVueltas<5);

	contadorTotal=contadorMasculino+contadorFemenino;
	promedioEdad=acumuladorEdad/contadorTotal;

	if (sexo=="F") {
		document.write(" Cantidad Femenino "+contadorFemenino);
		document.write(" Mujer mas temperatura" + temperaturaMax);
	}else{
		document.write(" No hay mujeres");
	}
	
	document.write(" Cantidad Masculino "+ contadorMasculino);
	document.write(" promedio Edad " + promedioEdad);
}
