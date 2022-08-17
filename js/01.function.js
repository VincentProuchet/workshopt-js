
// permet de voir dans quel fichier js on est
console.log("01 - functions");


let nombre1 = 10;
let nombre2 = 20;
/**
 * @param {*} nb1 
 * @param {*} nb2 
 * @returns addition des deux paramétres
 */
function additionner(nb1, nb2) {
    return nb1 + nb2;
}

let resultat = additionner(nombre1, nombre2);
console.log("resultat 1 " + resultat);
// on assigne directement la fonction à une variable, c'est un passage par référence
let somme = additionner;

let resultat2 = somme(nombre1, nombre2);
console.log("resultat 2 " + resultat2);

/**
 * 
 * @param {*} nb1 
 * @param {*} nb2 
 * @returns la multplication du premier paramètre par le second
 */
let multiplication = function (nb1, nb2) {
    return nb1 * nb2;
}
let resultat3 = multiplication(nombre1, nombre2);
console.log("resultat 3 " + resultat3);

afficherOperation = function (nomOperation, operation, nb1, nb2) {
    console.log(`${nomOperation}(${nb1},${nb2})=${operation(nb1, nb2)} `);
}

afficherOperation("Somme", somme, 20, 40);
afficherOperation("Multiplication", multiplication, 10, 20);
afficherOperation("Soustraction", function (nb1, nb2) { return nb1 - nb2 }, 15, 5);