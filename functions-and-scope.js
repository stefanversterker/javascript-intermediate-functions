// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const grades2 = [6, 4, 5];
const grades3 = [8, 9, 4, 6, 10];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// * Check alle waardes in de array met een for loop.
// * Zorg dat de lengte van de loop gelijk is aan de lengte van de array.
// * Declareer een let variable genaamd numberOfCumLaude en geef deze de beginwaarde 0.
// * Maak een if statement die numberOfCumLaude telkens met +1 updatet wanneer er een waarde van 8 of hoger voorbij komt in de loop.

let numberOfCumLaude = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        numberOfCumLaude = numberOfCumLaude + 1;
    }
}
console.log('opdracht 1a');
console.log(cumLaude(grades));


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


function cumLaude(listOfResults) {
    let numberOfCumLaude = 0;
    for (let i = 0; i < listOfResults.length; i++) {
        if (listOfResults[i] >= 8) {
            numberOfCumLaude = numberOfCumLaude + 1;
        }
    }
    return numberOfCumLaude
}

console.log('opdracht 1b');
console.log(cumLaude(grades));
console.log(cumLaude(grades2));
console.log(cumLaude(grades3));


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// * Het gemiddelde cijfer bereken je door alle waardes in de array bij elkaar op te tellen en vervolgens te delen door het aantal waardes in deze array.
// * Declareer een let variable genaamd pointsTotal en geef deze de beginwaarde 0.
// * Maak een loop die bij elke iteratie een waarde uit de array optelt bij pointsTotal.
// * Na de laatste iteratie return je pointsTotal gedeeld door array[i].length.

/*Tel alle cijfers bij elkaar op*/
/*Deel pointsTotal door het aantal entries*/

let pointsTotal = 0;

    for (let i = 0; i < grades.length; i++) {
        pointsTotal = pointsTotal + grades[i];
    }


console.log('opdracht 2a');
console.log(pointsTotal / grades.length);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4



function averageGrade(listOfResults) {
    let pointsTotal = 0;
    for (let i = 0; i < listOfResults.length; i++) {
        pointsTotal = pointsTotal + listOfResults[i];
    }
    return pointsTotal / listOfResults.length;
}

console.log('opdracht 2b');
console.log(averageGrade(grades));
console.log(averageGrade(grades2));
console.log(averageGrade(grades3));


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGradeRound(listOfResults) {
    let pointsTotal = 0;
    for (let i = 0; i < listOfResults.length; i++) {
        pointsTotal = pointsTotal + listOfResults[i];
    }
    return (pointsTotal / listOfResults.length).toFixed(2);
}

console.log('opdracht 2c');
console.log(averageGradeRound(grades));
console.log(averageGradeRound(grades2));
console.log(averageGradeRound(grades3));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// * Gebruik een for loop om de array met cijfers door te lopen.
// * Maak een let variabele genaamd topGrade aan waarin je het hoogste cijfer kunt opslaan. Geef topGrade de beginwaarde 0.
// * Gebruik een if statement om te kijken of grades[i] groter is dan topGrade. Alleen als dit zo is, overschrijf je topGrades met grades[i].

let topGrade = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > topGrade) {
        topGrade = grades[i];
    }
}

console.log('opdracht 3a');
console.log(topGrade);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10



function highestGrade(listOfResults) {
    let topGrade = 0;
    for (let i = 0; i < listOfResults.length; i++) {
        if (listOfResults[i] > topGrade) {
            topGrade = listOfResults[i];
        }
    }
    return topGrade;
}

console.log('opdracht 3b');
console.log(highestGrade(grades));
console.log(highestGrade(grades2));
console.log(highestGrade(grades3));


