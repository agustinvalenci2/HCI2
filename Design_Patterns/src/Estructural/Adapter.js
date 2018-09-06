// Calcula el precio del dolar y calcula el iva
function CalculatePriceDolar(){

	this.newCalculateDolar = function(originalPrice){

		var dolar = 0.00033;
		var conversion = originalPrice * dolar;
		var dolarIva = (conversion * 9) / 100;
		return (conversion + dolarIva).toFixed(2);
	}
}

// Calcula el precio del euro y calcula el iva
function CalculatePriceEuro(){
	this.newCalculateEuro = function(originalPrice){

		var euro = 0.00028;
		var conversion = originalPrice * euro;
		console.log(conversion);
		var euroIva = (conversion * 21) / 100;
		console.log(euroIva);
		return (conversion + euroIva).toFixed(2);
	}
}
