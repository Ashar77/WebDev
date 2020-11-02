const getPosts = async () => {

    try {

        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await usersResponse.json();
        console.log('user response ===>',usersData);
    
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await postsResponse.json();
        //console.log('posts response ===>',postsData);


        postsData.forEach((post)=>{
      //      console.log(post.id);
        })


        const postTitle = postsData.map((post)=>post.title);
        console.log(postTitle);


        //const postTitle = postsData.map((post) => {

          //  return {
            //    title : post.title
            //}

        //});
        //console.log(postTitle);

        
    } catch(error){
        console.log(error);
    }

}         

getPosts();