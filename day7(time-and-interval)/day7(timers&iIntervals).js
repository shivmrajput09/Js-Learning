/* setTimeout(()=>{
console.log("y aa gya m");
},5000)

const clock = setInterval(()=>{
    console.log("m har bar 8 sec m chalunga");
},8000);
 
 clearInterval(clock);

console.log("timer aane wala h");
*/
    let count = 1;

let counter = setInterval(()=>{
    console.log(count);
    count++;
if(count > 9){
    clearInterval(counter);
}
 },2000);

 