let minCelujacy = 90;
let minBardzoDobry = 80;
let minDostateczny = 70;
let minMierny = 60;
let minZalicza = 50;

let ocena = function (wynik, maks) {
    let procenty = wynik / maks * 100;
    let ocenaCyfrowo = null;

    if (procenty >= minCelujacy) {
        ocenaCyfrowo = 6;
    } else if (procenty >= minBardzoDobry) {
        ocenaCyfrowo = 5
    } else if (procenty >= minDostateczny) {
        ocenaCyfrowo = 4
    } else if (procenty >= minMierny) {
        ocenaCyfrowo = 3
    } else if (procenty >= minZalicza) {
        ocenaCyfrowo = 2
    } else {
        ocenaCyfrowo = 1;
    }

    return `Uczeń zdobył ${procenty}% i otrzymał ${ocenaCyfrowo}!`;

};

console.log(ocena(10, 20));
console.log(ocena(12, 20));
console.log(ocena(15, 20));
console.log(ocena(18, 20));
console.log(ocena(19, 20));