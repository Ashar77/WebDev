const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 

//basic for Loop
/*
for (let i = 0 ; i<companies.length;i++){
    console.log(companies[i])
}
*/

//For Each

companies.forEach(function(Company){
    console.log(Company.name , Company.category);
})





// FILTER



//  allow 21 years and older
/*
let canDrink = [];
for(let i = 0 ; i < ages.length; i++){
    if (ages[i] >= 21){
        canDrink.push(ages[i])
    }
}
console.log(canDrink);

*/


/*
let canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});
*/

let canDrink = ages.filter(age => age>=21);

//console.log(canDrink);




//filter retail comapines

/*
let retailCompaines = companies.filter(function(Company){
    if(Company.category=='Retail'){
        return true;
    }
});

console.log(retailCompaines);
*/

let retailCompaines = companies.filter( (companies) => companies.category == 'Retail');
//console.log(retailCompaines);


//filter compaines which are started before 90s
let EighteesCompaines = companies.filter( (companies) => companies.start < 1990);
//console.log(EighteesCompaines);


//filter compaines that are lasted 10 years or more

let lastedTenYears = companies.filter((companies) => companies.end - companies.start >= 10 );
console.log(lastedTenYears);








//  MAP
// create array of company names

/*

const companyName = companies.map(function(company){
    return company.name;
});

console.log(companyName);

//square the ages

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age*2);
console.log(agesTimesTwo);

let ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age*2)

console.log(ageMap);

*/







//  SORT  
 
// sort companies a/c to start year


/*
let sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(sortedCompanies);
*/


let sortedCompanies = companies.sort( (a,b) => a.start > b.start ? 1 : -1 );
console.log(sortedCompanies);


//let sortedAges = ages.sort( (a,b) => a > b ? 1 : -1 );

let sortedAges = ages.sort( (a,b) => a -b );

console.log(sortedAges);








// REDUCE 

// let ageSum = 0;
// for (let i =0 ; i < ages.length; i++){
//     ageSum += ages[i];
// }

// let ageSum = ages.reduce(function(total,age){
//     return total + age;
// },0)

let ageSum = ages.reduce((total , age)=> total+age, 0);


console.log(ageSum);


// get total years for all compaines 


// let totalYears = companies.reduce(function(total,company){
//    return total + (company.end - company.start);
// },0);




let totalYears = companies.reduce((total,company) =>
 total + (company.end - company.start) ,0);

 console.log(totalYears);


// COMBINING METHODS

const myAges = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


 const combined  = myAges
 .map(age => age * 2)
 .filter(age => age >= 40)
 .sort((a,b)=> a-b)
 .reduce( (a,b) => a+b , 0 ) 

console.log(combined);



