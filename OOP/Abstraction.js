// Abstraction == Hide the details , Show the Essentials.


/*
function Circle(radius){
    this.radius = radius;

    this.defaultLocation = {x:0,y:0};

    this.computeOptimumLocation = function(){
        //...
    }

    this.draw = function(){

        this.computeOptimumLocation();

        console.log('draw');
    };
}
*/

//const circle = new Circle(10);

//we don't want the user to directly access the defaultLocatoon property and computeOptimumLocation method .. (abstraction)
//in our scenerio user can only access .radius and .draw

//implementing astraction on the above code


function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:0,y:0};

    let computeOptimumLocation = function(){
        //...
    }

    this.draw = function(){

        computeOptimumLocation();   //closure

        //defaultLocation

        //this.radius

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw() // only draw and radius are accessible 




