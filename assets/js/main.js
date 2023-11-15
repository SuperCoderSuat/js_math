// ***********************************
//          JS Math lvl 1.1
// ***********************************
console.log("%c JS Math lvl 1.1", "color:green");

console.log(Math.PI);

const roundedPI = Math.PI;

console.log(roundedPI.toFixed(2));

// ***********************************
//          JS Math lvl 1.2
// ***********************************
console.log("%c JS Math lvl 1.2", "color:green");

const array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

array.forEach(element => {

    console.log(Math.round(element));

});

// ***********************************
//          JS Math lvl 1.3
// ***********************************
console.log("%c JS Math lvl 1.3", "color:green");

const generateRandomNumbers = () => {

    // Zufällige Nummer zwischen 0 (inklusive) und 1 (exklusive)
    const randomNum = Math.random();

    // Zufällige Nummer zwischen 1 (inklusive) und 10 (inklusive)
    const randomNum1_10 = Math.floor(Math.random() * 10) + 1;

    // Zufällige Nummer zwischen 1 (inklusive) und 100 (inklusive)
    const randomNum1_100 = Math.floor(Math.random() * 100) + 1;

    console.log(randomNum);
    console.log(randomNum1_10);
    console.log(randomNum1_100);

}

generateRandomNumbers();

// ***********************************
//          JS Math lvl 1.4
// ***********************************
console.log("%c JS Math lvl 1.4", "color:green");

const zahlenArr = [393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488];

// console.log(zahlenArr);
// console.log(...zahlenArr);
console.log(Math.min(...zahlenArr));
console.log(Math.max(...zahlenArr));

// ***********************************
//          JS Math lvl 2.1
// ***********************************
console.log("%c JS Math lvl 2.1", "color:green");

const rundeAuf = (nummer, nachkomma) => parseFloat(nummer.toFixed(nachkomma));

console.log(rundeAuf(3.1415926535, 5));

// ***********************************
//          JS Math lvl 2.2
// ***********************************
console.log("%c JS Math lvl 2.2", "color:green");

const zahlenspiel = () => {

    // Zufällige Zahl zwischen 1 und 10 generieren
    const programmsZahl = Math.floor(Math.random() * 10) + 1;

    // Benutzereingabe abfragen
    const benutzerZahl = prompt("Rate eine Zahl zwischen 1 und 10:");

    // Überprüfen, ob die Eingabe korrekt ist
    if (benutzerZahl == programmsZahl) {

        console.log("Glückwunsch! Du hast die Zahl richtig erraten!");

    } else {

        console.log(`Du hast verloren :( Die Nummer lautet ${programmsZahl}`);

    }
}

zahlenspiel();

