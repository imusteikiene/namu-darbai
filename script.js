
// ==== CONDITIONS =======

// Pirma užduotis
// Paklauskite prekės kainos ir atspausdinkite tokį rezultatą:

// Prekės kaina su PVM: xx.xx €
// PVM: xx.xx €
// Prekės kaina be PVM: xx.xx €

// Suapvalinkite iki 2 skaičių po kablelio.
// PVM = 21%

// Kad atspausdinti tekstą ir kintamąjį vienoje eilutėje naudokite console.log("Prekės kaina su PVM: " + kaina + "€")

// Papildomai:
// Jeigu įvestas ne skaičius, o tekstas, pakartotinai klausti kainos

// Antra užduotis
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti;
// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Jei prekės kaina daugiau arba lygu 50€ arba miestas yra "Vilnius"- pristatymas nemokamas. Pristatymas kitur Lietuvoje: 20€;

// Galiausiai atspausdintų tokią informaciją:

// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a

// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

// 3 variantas (su nemokamu pristatymu)

// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.

//pirma

var prekesKainaSuPVM = 36.30
var prekesKainaSuPVM = prompt("iveskite kaina")
var PVMtarifas = 0.21;
var prekesKainaBePVM = 30.00;
var PVM = prekesKainaBePVM * PVMtarifas;

console.log("Prekės kaina su PVM: " + prekesKainaBePVM + "€");



//antra

var kaina = prompt("Įveskite prekės kainą");
var klausimas = prompt("Ar reikalingas pristatymas į namus?");
var miestas = prompt("Į kurį miestą reiks pristatyti?");
if("prekes >= 50 || pristatymoMiestas === Vilnius"){
    pristatymoAdresas = "Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a";}
    else {
     pristatymoKaina = 20;
        pristatymoAdresas = "Pristatymas kitur Lietuvoje: 20eu"}
        console.log("Prekės kaina: " + prekesKaina + " €");
        console.log(pristatymoAdresas);
        if (pristatymoKaina > 0) {
            console.log("Pristatymo kaina: " + pristatymoKaina + " €");
        }
