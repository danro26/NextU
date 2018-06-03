var calculadora = (function(){
	pantalla = document.getElementById("display");
	var x = "0";
	var sizeN = 1;
	var sizeO = 1;
	var inicial = true;
	var coma, operando, repite, negative = false;
	var tempN, tempO = " ";
	numeros = new Array();
	operaciones = new Array();
	console.log("Calculadora iniciada!");
	
  	return{
  		numero: function(num){
			if(x.length < 8){
				if(x == "0" && inicial == true){
					if (num == ".") {
						pantalla.innerHTML = "0."
						x = "0.";
						coma = true;
						inicial = false;
						console.log("Valor es "+x+" --- Coma "+coma);
					}else if(num == "0"){
						console.log("Valor es 0 Default");
					}else{
						pantalla.innerHTML = num;
						x = num;
						inicial = false;
						console.log("Valor es "+x);
					}
				}else if(num == "." && coma == false){
					pantalla.innerHTML += num;
					x += num;
					coma = true;
					console.log("Valor es "+x+" --- Coma "+coma);
				}else if (num == "." && coma == true) {
					console.log("Aqui no debe pasar nada");
					//YA TENEMOS UNA COMA EN EL NUMERO
				}else{
					pantalla.innerHTML += num;
					x += num;
					console.log("Valor es "+x);
				}
			}
		},
		operacion: function(tipo){
			var lNum = x;
			console.log("el tipo es " + typeof lNum + " y es "+lNum);
			
			if(repite == true){
				
				operaciones.push(tipo);
				operando = true;
				repite = false;
				pantalla.innerHTML = "";
				if(numeros.length == sizeN){
					x = "0";
					inicial = true;
					coma = false;
					sizeN = sizeN + 1;
					
					console.log("Numero agregado al arreglo! "+lNum);
				}else{
					console.log("Error al agregar numero al Arreglo Numeros");
				}
			}else{
				numeros.push(lNum);
				operaciones.push(tipo);
				operando = true;
				
				pantalla.innerHTML = "";
				if(numeros.length == sizeN){
					x = "0";
					inicial = true;
					coma = false;
					sizeN = sizeN + 1;
					
					console.log("Numero agregado al arreglo! "+lNum);
				}else{
					console.log("Error al agregar numero al Arreglo Numeros");
				}
			}
			
		},
		igual: function(){
			if (operando == false) {
				pantalla.innerHTML = x;
			}else if (repite == true && operando == false) {
				switch(tempO){
					case '+':
						var num1 = numeros[0];
						var num2 = tempN;
						var resN = parseFloat(num1) + parseFloat(num2);
						var resS = String(resN);
						if(resS.length > 8){
							resS = resS.substr(0,8);
						}
						numeros = [];
						numeros[0] = resS;
						pantalla.innerHTML = resS;
						console.log("Resultado de suma es "+resS);
						break;
					case '-':
						var num1 = numeros[0];
						var num2 = tempN;
						var resN = parseFloat(num1) - parseFloat(num2);
						var resS = String(resN);
						if(resS.length > 8){
							resS = resS.substr(0,8);
						}
						numeros = [];
						numeros[0] = resS;
						pantalla.innerHTML = resS;
						console.log("Resultado de resta es "+resS);
						break;
					case '/':
						var num1 = numeros[0];
						var num2 = tempN;
						var resN = parseFloat(num1) / parseFloat(num2);
						var resS = String(resN);
						if(resS.length > 8){
							resS = resS.substr(0,8);
						}
						numeros = [];
						numeros[0] = resS;
						pantalla.innerHTML = resS;
						console.log("Resultado de divi es "+resS);
						break;
					case '*':
						var num1 = numeros[0];
						var num2 = tempN;
						var resN = parseFloat(num1) * parseFloat(num2);
						var resS = String(resN);
						if(resS.length > 8){
							resS = resS.substr(0,8);
						}
						numeros = [];
						numeros[0] = resS;
						pantalla.innerHTML = resS;
						console.log("Resultado de multi es "+resS);
						break;
				}
			}else{
				var lNum = x;
				tempN = x;
				tempO = operaciones[operaciones.length-1];
				console.log("el tipo es " + typeof lNum + " y es "+lNum);
				numeros.push(lNum);
				if(numeros.length == sizeN){
					x = "0";
					sizeN = sizeN + 1;

					console.log("Numero agregado al arreglo! "+lNum);
					console.log("en el arreglo! "+numeros.length);
				}else{
					console.log("Error al agregar numero al Arreglo Numeros");
				}
				for(var i = 0; i < operaciones.length; i++){
					switch(operaciones[i]){
						case '+':
							var num1 = numeros[i];
							var num2 = numeros[i+1];
							console.log(num1 + num2);
							var resN = parseFloat(num1) + parseFloat(num2);
							var resS = String(resN);
							if(resS.length > 8){
								resS = resS.substr(0,8);
							}

							numeros[i+1] = resS;
							pantalla.innerHTML = resS;

							console.log("Resultado de suma es "+resS);
							break;
						case '-':
							var num1 = numeros[i];
							var num2 = numeros[i+1];
							console.log(num1 - num2);
							var resN = parseFloat(num1) - parseFloat(num2);
							var resS = String(resN);
							if(resS.length > 8){
								resS = resS.substr(0,8);
							}
							numeros[i+1] = resS;
							pantalla.innerHTML = resS;
							console.log("Resultado de resta es "+resS);
							break;
						case '*':
							var num1 = numeros[i];
							var num2 = numeros[i+1];
							console.log(num1 * num2);
							var resN = parseFloat(num1) * parseFloat(num2);
							var resS = String(resN);
							if(resS.length > 8){
								resS = resS.substr(0,8);
							}
							numeros[i+1] = resS;
							pantalla.innerHTML = resS;
							console.log("Resultado de multi es "+resS);
							break;
						case '/':
							var num1 = numeros[i];
							var num2 = numeros[i+1];
							console.log(num1 / num2);
							var resN = parseFloat(num1) / parseFloat(num2);
							var resS = String(resN);
							if(resS.length > 8){
								resS = resS.substr(0,8);
							}
							numeros[i+1] = resS;
							pantalla.innerHTML = resS;
							console.log("Resultado de divi es "+resS);
							break;
					}
				}
				if(repite == false){
					var temp = numeros[numeros.length - 1];
					numeros = [];
					operaciones = [];
					x = temp;
					numeros.push(temp);
					repite = true;
					operando = false;
					console.log(numeros.length + " numero en el arreglo = "+ numeros[numeros.length-1]);
					sizeN = numeros.length;
					sizeO = numeros.length +1;
				}else{

				}
				
			}
		},
		limpiar: function(){
			x = "0";
			sizeN = 1;
			sizeO = 1;
			inicial = true;
			coma, operando,repite, negative = false;
			numeros = [];
			operaciones = [];
			pantalla.innerHTML = "0";
			console.log("Calculadora Limpia!");
		},
		negativo: function(){
			if(x != "0"){
				if(negative == false){
					x = "-"+x;
					pantalla.innerHTML = x;
					negative = true;
				}else{
					x = x.substr(1,7);
					pantalla.innerHTML = x;
					negative = false;
				}
			}
		}
  	}
})();

function numero(num){
	calculadora.numero(num);
}
function operar(s){
	calculadora.operacion(s);
}
function igualar(){
	calculadora.igual();
}
function limpia(){
	calculadora.limpiar();
}
function nega(){
	calculadora.negativo();
}