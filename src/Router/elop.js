console.log('execution start');
fetch(`https://fakestoreapi.com/products/categories`)
 .then(async res => await res.json())
 .then(data => {
    data.map(async item =>{
        console.log(await item);
    })
 })
 setTimeout(function (){
    console.log(`i am fetching from api`);
 },0);
 console.log('excution ended');