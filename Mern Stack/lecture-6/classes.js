class Car{
    constructor(model , engine, color, year) {
        this.model = model;
        this.engine = engine;
        this.color = color;
        this.year = year;    
    }

    getColor(){
        console.log(`the color is ${this.color}`);
    }                                                   

    //we can also use arrow function here 

    getEngine = () => {
        console.log(`the engine is ${this.engine}`);
    }

}

const corolla = new  Car('Xli',1300,'white',2020);
const corollaGrande = new Car('Grande',1600,'black',2020);
//console.log(corolla);
//console.log(corollaGrande);

//corolla.getColor();
//corollaGrande.getColor();

//corolla.getEngine();




class Dealer extends Car{
    constructor(name,address,model,engine,color){
        super(model,engine,color)
        this.name = name;
        this.address = address;
        
    }

    static value = "some static value";

    static getAddress(x){
        console.log('the address is ',x.address);
    }
    
    static changeColor(y,color){
        y.color = color;
        console.log('the color is now changed to ',y.color);
    }

}

const dealer_1 = new Dealer('Haseeb motors','khi' , 'Gli',1300,'grey');
//console.log(dealer_1); 
dealer_1.getColor()
//console.log(dealer_1.value)
//console.log(Dealer.value)


 
// static method for chaning color of car   
                                              

Dealer.getAddress(dealer_1);

Dealer.changeColor(dealer_1,'yellow');

console.log(dealer_1);