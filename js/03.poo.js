console.log("03 - poo ");


/**
 * ça c'est de l'ES5
 */
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    /**
     * @returns une chaine de caractére formaté contenant les valeurs de propriétés de l'objet
     */
    this.getNomComplet = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }

}
/**
 * appelle chaque paramétre prévu dans un objet
 * de type personne
 * pour l'afficher dans la console
 * @param {*} personne 
 */
function afficherPersonne(personne) {

    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}


// de nouvelles personnes
let jules = new Personne('Jules', 'LEMAIRE', 'jules77');
let paul = new Personne("Paul", "LEMAIRE", "paul44");

// on les affiche
afficherPersonne(jules);
afficherPersonne(paul);
// on chage le pseudo
jules.pseudo = "jule44";
console.log(jules.getNomComplet());
// julse a-t'il un age ?
console.log(jules.age);
// pour ajouter une proprièté "après coup"
// ce qui selon moi est une ignoble erreur de programmation
// surtout avec ECM6
// il faut passer par prototype
Personne.prototype.age = "NON RENSEIGNE";
// non sérieux par pitié ne faite plus jamais ça

console.log(" on reteste : " + jules.age);
// on change l'age
jules.age = 30;
console.log(" on reteste : " + jules.age);
// nouvelle fonction de la classe
// notez qu'il faut impérativement
// utiliser la syntaxe function(){} 
// la syntaxe ()=>{} ne fonctionnera pas
Personne.prototype.getInitiales = function () { return this.nom.charAt(0) + this.prenom.charAt(0) };
// d'ailleurs est-ce qu'elle marche
console.log(jules.getInitiales());



///////////////////////////////////////////////////
// un object JSON sauvage apparait
let robert = {
    nom: "LEPREFET",
    prenom: "Robert",
    pseudo: "robert77",
    getNomComplet: function () { return this.nom + " " + this.prenom + " " + this.pseudo; }
}
// il fonctionne très bien avec notre fonction afficherPersonne
afficherPersonne(robert);

/**
 * le client hérite de personne
 * l'héritage se faite pas un call sur la classe mére
 * depuis le constructeur
 * 
 * @param {*} numeroClient 
 * @param {*} nom 
 * @param {*} prenom 
 * @param {*} pseudo 
 */
function Client(numeroClient, nom, prenom, pseudo) {
    // l'héritage se faite pas un call sur la classe mére
    // depuis le constructeur
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    /**
     * putain c'est moche
     * @returns 
     */
    this.getInfo = () => {
        return this.numeroClient + "  " + this.nom + " " + this.prenom;
    }

}
// nouveau Client
steve = new Client("A01", "LUCAS", "Steve", "steve44");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());
