console.log("02 - tableaux ");

let villes = ["nantes",
    "paris",
    "saint-nazaire",
    "angers",
    "le mans"
];

let lettreADansToutesLesVilles = villes.every(element => element.includes("a"));

let auMoinsUneVilleAvecUnTiret = villes.some(element => element.includes("-"));

let villeSanTiretSansEspace = villes.filter(element => (!element.includes("-") && !element.includes(" ")));


lesVillesMajusculesSeTerminantParS = villes.filter(element => element.endsWith("s")).map(element => element.toLocaleUpperCase());



console.log("lettre A dans toutes les villes : ");
console.log(lettreADansToutesLesVilles);
console.log("au Moins Une Ville Avec Un Tiret : ");
console.log(auMoinsUneVilleAvecUnTiret);
console.log("ville San Tiret Sans Espace : ");
console.log(villeSanTiretSansEspace);
console.log("les Villes Majuscules Se Terminant ParS : ");
console.log(lesVillesMajusculesSeTerminantParS);