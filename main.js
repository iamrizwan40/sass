let numbers = [23,32,44,27,67,46,56,77,43,12,9,4,3,7,0,22,45,76,89,90,65,32,12,10,11,34,54,65,67,34,23,56,78,98,76,123,234,123];

let numberSet_1 = [];
let numberSet_2 = [];
let numberSet_3 = [];

for(let i =0; i<numbers.length; i++){
    if(numbers[i] > 50){
        numberSet_1.push(numbers[i]);
    }
}
console.log(numberSet_1);
// // numbers.forEach(num => {
// //     if(num >= 50 && num <100){
// //         numberSet_1.push(num);
// //     }
// //     if(num >=100){
// //         numberSet_2.push(num);
// //     }
// })

let numberListOne = document.querySelector('.number-list-one');
let numberListTwo = document.querySelector('.number-list-two');


numberSet_1.forEach(num => {
    numberListOne.innerHTML += `<li>${num}</li>`;
})

numberSet_2.forEach(num => {
    numberListTwo.innerHTML += `<li>${num}</li>`;
})
