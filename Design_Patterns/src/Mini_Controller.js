/*Esta funcion permite obtener el valor del select de html(onchange)*/
let originalPrice;
let ivaCalculate;
var array=[]
function getValueType (paellaType){
	if(array.indexOf(paellaType.value)==-1)
		array.push(paellaType.value)
	else{
		var aux=[]
		for(var i =0;i<array.length;i++){
            if(array[i]!=paellaType.value){
                aux.push(array[i]);
            }
        }
        array=aux
     }
	this.paellaType = paellaType;

}

function getValuePrice(paellaPrice){

	this.paellaPrice = paellaPrice;
	ivaCalculate = Math.round((this.paellaPrice.value * 19) / 100);
	originalPrice = this.paellaPrice.value - ivaCalculate;
}

function getValueCoin(typeCoin){
	this.typeCoin = typeCoin;
}

function buildPaella(){

	/*Construccion de paella*/
	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	console.log(paellaProduct);

	/*llamamdo a patrones de diseño prototype y singleton*/
	var buildBase = produceBase(); //prototype
	var executeSingle = executeSingleton();
	console.log(buildBase);
	console.log(executeSingle);

	/*validacion de tipo de moneda para llamado del adaptador*/
	if(this.typeCoin.value == "dolar"){
		console.log("Precio en dolares con iva " + new CalculatePriceDolar().newCalculateDolar(originalPrice));
	}else if(this.typeCoin.value == "euro"){
		console.log("Precio en dolares con iva " + new CalculatePriceEuro().newCalculateEuro(originalPrice));
	}

	console.log("Precio Original " + originalPrice);
	console.log("Precio Iva " + ivaCalculate);
	//var carro= new buildShoppingCar(paellaProduct)
	//console.log(carro)
	var arr=[]
	for(var i=0 ;i< array.length;i++){
		arr.push(generatePaella(array[i]))
	}

	
	console.log(arr)
}