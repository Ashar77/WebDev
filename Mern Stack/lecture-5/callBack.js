const posts = [
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'}
]

function getPosts(){
    let output = '';
    setTimeout(()=> {
        posts.forEach(post => {
            output += `<li>${posts.title}</li>`
            document.body.innerHTML = output;
        })
    },2000); 
}

getPosts();