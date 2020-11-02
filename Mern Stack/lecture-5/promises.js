const posts = [
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'}
];



function getPosts(){
    let output = '';
    setTimeout(()=> {
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
            document.body.innerHTML = output;
        })
    },1000); 
}




function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve(10);

            }else{
                reject('Error: something went wrong !');
            }
        },2000);
    
    });

};
   

//promise has 3 states . pending , resolve or reject.

createPost({title:'post three',body:'this is post three'})
.then((val) => {
    getPosts();
    return val
})

.then((val) => val*10)
.then((val)=>console.log(val))  
.then(() => console.log('hello world'))
.catch(err => console.log(err));


//fetch returns a promise by default

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
//.then(data => console.log(data))
.then(data => console.log(data))
.catch(err => console.log(err));