import { afficherCarte, Carte, Couleur, creerCarte } from "./carte";

/**
 * Va créer un jeu de 52 cartes en incluant les couleurs 
 * @returns un paquet de 52 cartes
 */

function creerJeu(): Carte[] {
    let jeu: Carte[] = [];
            
    for(let i = 0; i < 4; i++) { //On doit créer 4 fois 13 cartes pour les 4 symboles
        for(let j = 2; j < 15; j++) {
            if(i=0) {
                //Pique
                jeu.push(creerCarte(Couleur.Pique, j));
                }
            if(i=1) {
               //Carreau
               jeu.push(creerCarte(Couleur.Carreau, j));
                }  
            if(i=2){
               //Trèfle
                jeu.push(creerCarte(Couleur.Trefle, j));
                   }
            if(i=3){
              //Coeur
                jeu.push(creerCarte(Couleur.Coeur, j));
                   }
        }
       }       
    return jeu;
    }

/**
 * Cela va tirer une carte va donner la valeur de retour
 * @param jeuDeCarte c'est un jeu de carte crée par la fonction creerJeu
 * @returns la première carte
 */

export function tirerCarte(jeuDeCarte : Array<Carte>    ): Carte {
    let carteTirage : Carte
    let randomNum : number = getRandom {1,51};
    carteTirage = jeuDeCarte [randomNum]
    return carteTirage
}

/**
 * Cela va retourner un nombre aléatoire dans une certaine intervalle 
 * @param min le minimum de l'intervalle
 * @param max le maximum de l'intervalle
 * @returns une valeur aléatoire entre min et max 
 */

function getRandom(min : number, max : number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random[1] * (max - min +1)) + min;
}