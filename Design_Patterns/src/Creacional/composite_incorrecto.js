function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];

    this.proto=function(){
    var objectComposite = {

    add: function(product){
        arrayElements.push(product);
        return arrayElements
    },

    remove: function (product){
        
        var aux=[]
        for(var i =0;i<arrayElements.length;i++){
            if(arrayElements[i]!=product){
                aux.push(arrayElements[i]);
            }
        }
        arrayElements=aux;
    }
    
    }
    return objectComposite
}
 
}

function buildShoppingCar(typeProduct,product){//tipo de producto, producto){

    var car = new shoppingCar("car");

    
    
    return car.proto().add(product)
    
}

