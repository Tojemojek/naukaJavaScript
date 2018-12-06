let dodaj = function (a, b, c) {
    return (a + b + c);
};

let rezultat = dodaj(5, 6, 7 );
console.log(rezultat);

let bierzWynik = function (imie = 'nieznany', wynik = 0) {
    return "Imie " + imie + " wynik " + wynik;
};


console.log(bierzWynik());
console.log(bierzWynik(undefined,10));
console.log(bierzWynik('aaa',10));
console.log(bierzWynik('aaa',undefined));


let napiwek = function (kwota, napiwekWProc = 0.1) {
    return kwota * napiwekWProc;
};

console.log('================');

console.log(napiwek(100,0));
console.log(napiwek(100));
console.log(napiwek(100,0.3));

//string template

let name = "tadaaaa";
let wiek = 10;
console.log(`Siema, nazywam się ${name}! Mam ${wiek} lat`);

let bierzWynik2 = function (imie = 'nieznany', wynik = 0) {
    return `Imie= ${imie}, wynik= ${wynik}`;
};
console.log(bierzWynik2());
console.log(bierzWynik2(undefined,10));
console.log(bierzWynik2("ja", 100));

console.log("===================");

let napiwek2 = function (kwota, napiwekWProc = 0.1) {
    nap = kwota * napiwekWProc;
    return `Dajesz ${napiwekWProc*100}% napiwku z kwoty ${kwota}, czyli kwotę ${nap}.`;
};

console.log(napiwek2(2));
console.log(napiwek2(100,0.01));
console.log(napiwek2(100,0.15));
