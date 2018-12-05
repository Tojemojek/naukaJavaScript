// AND &&
// OR ||

let temp = 50;

if (temp >= 60 && temp <= 90) {
    console.log('Jest całkiem spoko')
} else if (temp >= 110 || temp <=32){
    console.log('Mało przyjemnie!')
} else {
    console.log('Jest tak sobie')
}

console.log('===========================');


let jestWeganin1 = true;
let jestWeganin2 = false;

if (jestWeganin1 && jestWeganin2){
    console.log('Tylko wegańskie świństwo');
} else if (jestWeganin1 || jestWeganin2){
    console.log('Menu mieszane');
} else {
    console.log('Normalne menu')
}
