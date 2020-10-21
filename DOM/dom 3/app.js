// EVENTS

//let button = document.getElementById('button').addEventListener('click',buttonClick);

//function buttonClick(e){
   // console.log('button clicked');                 // onclick   is a old way
   //document.getElementById('header-title').textContent = 'changed';
   //document.querySelector('#main').style.backgroundColor = 'pink';
   //console.log(e)


   //console.log(e.target);
   //console.log(e.target.id);
   //console.log(e.target.className);
   //console.log(e.target.classList);
   let output = document.getElementById('output');
   //output.innerHTML = '<h3>'+e.target.id+'</h3>';

   //console.log(e.clientX);
   //console.log(e.clientY);
   
   //console.log(e.offsetX);
   //console.log(e.offsetY);

    //console.log(e.altKey);
    //console.log(e.ctrlKey);
    //console.log(e.shiftKey);
//}

let button = document.getElementById('button')


//MOUSE EVENTS



//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
button.addEventListener('mouseup',runEvent);



let box = document.getElementById('box')

//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);

box.addEventListener('mousemove',runEvent);


//KEY EVENTS


let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);

//itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);

//itemInput.addEventListener('cut',runEvent);
//itemInput.addEventListener('paste',runEvent);

itemInput.addEventListener('input',runEvent);



function runEvent(e){
    console.log('event type '+e.type);
    //console.log(e.target.value);

 //   document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

   // output.innerHTML = '<h3>Mousex: '+e.offsetX+'</h3>';

   // document.body.style.backgroundColor = "rgb( "+e.offsetX+", "+e.offsetY+" ,40 )";
            
 }

