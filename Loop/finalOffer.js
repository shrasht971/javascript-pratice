//For a given array with prices of 5 items =>[250,645,300,900,50]. All items have an offer of 10% Off on them. Change the array to store final price after applying offer.
let price=[250,645,300,900,50]
let i=0;
// for(let val of price){
//    let offer = val/10;
//    price[i]=price[i]-offer
//    console.log(`Final price after take offer = ${price[i]}`);
//    i++;
// }
for(let i=0; i<price.length; i++){
    let offer = price[i]/10;
    // console.log(`Final price after take offer = ${price[i]-offer}`);
    price[i]=price[i]-offer;
}
console.log(price);