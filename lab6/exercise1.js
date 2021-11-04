 
 const isPrime = num => new Promise((resolve, reject) => {
    setTimeout(function() {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) reject({ prime: false });
        resolve({ prime: num > 1 });
    }, 500);
});

async function isPrimeAsync(num){
    try{
   const p = await isPrime(num);
   console.log(p);
}
catch (err){
    console.error(err);
}
}

console.log('start');
isPrimeAsync(7)
console.log('end');