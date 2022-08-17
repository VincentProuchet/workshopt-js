console.log("03 - poo ");

class Personne {
    nom;
    prenom;
    pseudo;

    constructor(nom, prenom, pseudo) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
    };
    getNomComplet() {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }

}



let jules = new Personne('Jules', 'LEMAIRE', 'jules77');
let paule = new Personne("Paul", "LEMAIRE", "paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(paule.nom);
console.log(paule.prenom);
console.log(paule.pseudo);
console.log(paule.getNomComplet());
