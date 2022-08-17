console.log("03 - poo ");


/**
 * ça c'est de l'ES6 
 */
class Personne {
    nom;
    prenom;
    pseudo;

    constructor(nom, prenom, pseudo) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
    }
    /**
     * 
     * @returns une chaine de caractére formaté contenant les valeurs de propriétés de l'objet
     */
    getNomComplet() {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }

}



let jules = new Personne('Jules', 'LEMAIRE', 'jules77');
let paul = new Personne("Paul", "LEMAIRE", "paul44");

function afficherPersonne(personne) {

    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jule44";
console.log(jules.getNomComplet());
console.log(jules.age);
// pour ajouter une proprièté "après coup"
// ce qui selon moi est une ignoble erreur de programmation
// surtout avec ECM6
// il faut passer par prototype
Personne.prototype.age = "NON RENSEIGNE";
// non sérieux par pitié ne faite plus jamais ça

console.log(" on reteste : " + jules.age);

jules.age = 30;
console.log(" on reteste : " + jules.age);

Personne.prototype.getInitiales = function () { return this.nom.charAt(0) + this.prenom.charAt(0) };

console.log(jules.getInitiales());



///////////////////////////////////////////////////
// on revient à de l'ES5
let robert = {
    nom: "LEPREFET",
    prenom: "Robert",
    pseudo: "robert77",
    getNomComplet: function () { return this.nom + " " + this.prenom + " " + this.pseudo; }
}


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

steve = new Client("A01", "LUCAS", "Steve", "steve44");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfo());
