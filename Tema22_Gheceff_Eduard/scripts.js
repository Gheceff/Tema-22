var sirUnu = ["Ana", "Marius", "Andreea", "Maria", "Andrei", "Marius"];

for (var i = 0; i < sirUnu.length; i++) {
    if (sirUnu[i].length === 6) {
        console.log(sirUnu[i]);
    }
}



/* Exercitiul 2*/

var suma = 0;

for (var i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
    }
}

console.log("Suma numerelor multiple de 3 și 5 mai mici decât 1000 este: " + suma);


/* Exercitiul 3*/

var numar1 = parseFloat(prompt("Introduceți primul număr:"));
var numar2 = parseFloat(prompt("Introduceți al doilea număr:"));
var numar3 = parseFloat(prompt("Introduceți al treilea număr:"));
var numar4 = parseFloat(prompt("Introduceți al patrulea număr:"));
var numar5 = parseFloat(prompt("Introduceți al cincilea număr:"));
var numar6 = parseFloat(prompt("Introduceți al șaselea număr:"));

// Inițializăm variabila pentru a stoca cel mai mare număr
var celMaiMareNumar;

// Verificăm fiecare număr pentru a găsi cel mai mare
if (numar1 >= numar2 && numar1 >= numar3 && numar1 >= numar4 && numar1 >= numar5 && numar1 >= numar6) {
    celMaiMareNumar = numar1;
} else if (numar2 >= numar3 && numar2 >= numar4 && numar2 >= numar5 && numar2 >= numar6) {
    celMaiMareNumar = numar2;
} else if (numar3 >= numar4 && numar3 >= numar5 && numar3 >= numar6) {
    celMaiMareNumar = numar3;
} else if (numar4 >= numar5 && numar4 >= numar6) {
    celMaiMareNumar = numar4;
} else if (numar5 >= numar6) {
    celMaiMareNumar = numar5;
} else {
    celMaiMareNumar = numar6;
}

// Afișăm rezultatul
console.log("Cel mai mare număr este: " + celMaiMareNumar);


/* Exerictiul 4*/

var sirNote = [10, 9, 8.89, 4.50, 10, 10];
var numeMaterii = ["Matematica", "Engleza", "Geografie", "Istorie", "Educatie Fizica", "Romana"];

// Calculăm media notelor
var sumaNote = 0;
for (var i = 0; i < sirNote.length; i++) {
    sumaNote += sirNote[i];
}

var media = sumaNote / sirNote.length;

// Afișăm media
console.log("Media finală a Marinei este: " + media.toFixed(2));

// Verificăm dacă fiecare materie este promovată sau nu
for (var i = 0; i < sirNote.length; i++) {
    var estePromovata = sirNote[i] > 5 ? "Promovat" : "Nepromovat";
    console.log(numeMaterii[i] + ": " + estePromovata);}