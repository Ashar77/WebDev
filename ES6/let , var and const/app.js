var a = 'test 1';
var b = 'test 2';

//testing on global level
//console.log(a); 
//console.log(b);  



function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);

    for(var i = 0; i < 10;i++ ){
        console.log(i);
    }

    console.log(i);
}


testVar();





function testLet(){
    let a = 30;
    if (true){
        let a = 50;
        console.log(a);
    }
    console.log(a);


    for(let i = 0; i < 10;i++ ){
        console.log(i);
    }

    //console.log(i);           error:not defined 
}


testLet();  


const colors = [];

colors.push('red');
colors.push('blue');
colors.pop();

console.log(colors);

//colors = 'green';       // error: constant can not be changed.


