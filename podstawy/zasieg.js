// Global Scope poza blokami kodu
// Local Scope wewnątrz bloku kodu i wszystkie nadrzędne

let varOne = 'pierwsza zmienna';

if (true) {
    let varOne = 'przesłonięta';

    if (true) {
        varOne = 'nadpisane';
        console.log(varOne)
    }
}

if (true) {
    console.log(varOne)
}



if (true) {
    if (true) {
        varTwo = 'wyciek globalny zmiennych';
        // bez let zmienna zostaje zadeklarowana przez JS jako globalna
        console.log(varTwo)
    }
}

if (true) {
    console.log(varTwo)
}
