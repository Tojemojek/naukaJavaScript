let czyKontoZablokowane = false;
let userRole = 'user';


if (czyKontoZablokowane) {
    console.log('Konto zablokowane')
} else {
    console.log('Konto działa')
}

console.log('========================');

if (czyKontoZablokowane) {
    console.log('Konto zablokowane')
} else if (userRole === 'admin') {
    console.log('Konto działa, witaj Adminie')
} else {
    console.log('Konto działa')
}

console.log('========================');

let temp = 32;

if (temp <= 32) {
    console.log('Jest poniżej zamarzania wody');
} else if (temp >= 110){
    console.log('Jest za ciepło!')
} else {
    console.log('Jest całkiem spoko')
}
