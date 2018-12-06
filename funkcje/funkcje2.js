let imie;

if (imie === undefined){
    console.log("Nie ma imienia")
} else {
    console.log("Jest imie " + imie)
}

console.log('==============');

let kwadrat = function(num) {
    let wynik = num * num;
    return wynik;
};

console.log(kwadrat());

console.log('=================');

let rezultat = kwadrat();