function welcomeMsg(name = 'ashar'){
    console.log(`hello ${name}`);
}
welcomeMsg();


function createIcecream({scoops=1 , toppings = ['Dark choclate']}){
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    console.log(`your sundae has ${scoops} ${scoopText} with ${toppings.join('and')} toppings `)
}

createIcecream({scoops:2, toppings: ['s']});