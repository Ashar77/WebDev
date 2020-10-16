// Factory Function
function createCircle(radius){
    return{
            radius,
            draw: function(){
                console.log('draw !')
            }
        }
};
 

const circle = createCircle(1);

//circle.draw()
//console.log(circle.radius);



//      Constructor
// this = reference the object which is executing the code

function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw !!!')
    }
};

const another = new Circle(1)
another.draw()
console.log(another.radius)

//every object has constructor property        another.constructor , circle.constructor




