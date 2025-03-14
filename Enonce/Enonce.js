/** Exercice 1 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son carré.**/
function carre() {

    let number = parseFloat(prompt('Entrez un nombre et je vous donne son carré'));
    let carre = number*number;
    return alert('le carré de ' + number + ' est '+ carre);
}
/**Exercice 2 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche leur somme.**/

function addition() {

    let number1 = parseFloat(prompt('Entrez le premier nombre a additionner'));
    let number2 = parseFloat(prompt('Entrez le deuxieme nombre a additioner'));
    let result = number1 + number2;
    return alert('le résultat de l\'addition est ' + result);
}

function additionAlt() {

    let tableau = prompt('Entrez les deux nombres a additioner séparé par une virgule');
    let nombres = tableau.split(',');
    let result = parseFloat(nombres[0]) + parseFloat(nombres[1]);
    return alert('le résultat de l\'addition est ' + result);
    
}

/**Exercice 3 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres pairs compris entre 1 et ce nombre.**/

function pairs() {
    let number = parseFloat(prompt('Entrez un nombre, je vous donne tout les nombre pair entre 1 et ce nombre'));
    let tableau = [];
    let i = 1;
    while (i < number) {
        if (i % 2 === 0 ) {
            tableau.push(i);
        }
        i++
    }

    return alert(tableau);
}

/**Exercice 4 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres premiers compris entre 1 et ce nombre.**/

function premier() {
    
    let number = parseFloat(prompt('Entrez un nombre'));
    let tableauPremier = [];
    for(let i = 2; i <= number; i++) {
        if (verifPremier(i)){
            
            tableauPremier.push(i)
        }
    }

    return alert(tableauPremier);
    }


function verifPremier(number) {
for (let i = 2; i < number; i++) {
    if (number % i === 0 ) {
        return false;
    }}
    return true;
}

/**Exercice 5 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche la table de multiplication de ce nombre.**/

function table() {
    let number = parseFloat(prompt('Nombre :'))
    let tableau = [];

    for(let i = 1; i <= 10; i++) {
        let result = i * number
        tableau.push(i + 'x' + number + ' = '  + result)
    }
    console.log(tableau.join("\n"));
    return tableau;
}

/**Exercice 6 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa factorielle.**/

function factorielle() {

    let number = parseFloat(prompt('Nombre :'));
    let result;
    
    if(number === 1 || number === 0) {

        return 1;
    }
    
    calculfactorielle(number);

    console.log(`{la factorielle de ${number} est ${result}`);
}

function calculfactorielle(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {

        result *= i;
        
    }

    return alert(result);
}

/**Exercice 7 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son inverse.**/

function inverse() {
    let number = parseFloat(prompt('Nombre :'));

    result = number * -1;
    return result;
}

/**Exercice 8 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son plus grand diviseur.**/

/**Exercice 9 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son plus petit diviseur.**/

/**Exercice 10 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son pgcd avec 10.**/

/**Exercice 11 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche son ppcm avec 10.**/

/**Exercice 12 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche le plus grand commun diviseur de ces deux nombres.**/

/**Exercice 13 : Écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche le plus petit commun multiple de ces deux nombres.**/

/**Exercice 14 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Fibonacci jusqu'à ce nombre.**/

/**Exercice 15 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Syracuse jusqu'à ce nombre.**/

/**Exercice 16 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Collatz jusqu'à ce nombre.**/

/**Exercice 17 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Lucas jusqu'à ce nombre.**/

/**Exercice 18 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Pell jusqu'à ce nombre.**/

/**Exercice 19 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Fibonacci généralisée jusqu'à ce nombre.**/

/**Exercice 20 : Écrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche sa suite de Lucas généralisée jusqu'à ce nombre.**/
