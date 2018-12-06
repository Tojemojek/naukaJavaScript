let przerywnik='=============';

let powitaj = function(){
    console.log("Siemanko użytkowniku")
};

let kwadrat = function(num) {
    let wynik = num * num;
    return wynik;
};


console.log(przerywnik);
powitaj();
console.log(przerywnik);

let wynik1 = kwadrat(5);
let wynik2 = kwadrat(15);

console.log(wynik1);
console.log(wynik2);
console.log(przerywnik);


let konwersjaFnaC = function(far){
    let celcius = (far - 32) * 5 / 9;
    return celcius;
};

console.log(konwersjaFnaC(32));
console.log(konwersjaFnaC(68));
