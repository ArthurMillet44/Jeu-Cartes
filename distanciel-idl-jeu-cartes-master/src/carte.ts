/**
 * Définir les couleurs du jeu de carte.
 */

export enum Couleur {
        Pique,
        Carreau,
        Trefle,
        Coeur,
    }
    
/**
 * Représentaion des cartes avec une couleur et une valeur de 2 à 14
 */

    export interface Carte {
     
    
        couleur: Couleur,
    
        
    
        valeur: number,
    }
    
/**
 * Va créer une carte avec une couleur et une valeur
 * @param paramclr La couleur de la carte définie par l'énumération des couleurs
 * @param paramval La valeur de la carte définie par l'interface
 * @returns Une carte avec une couleur et une valeur
 */

   export function creerCarte(paramclr: Couleur, paramval: number) :Carte {
        let nouvelleCarte : Carte;
    
        if (paramval<=14 && paramval>=2){
    
            nouvelleCarte.couleur=paramclr;
            nouvelleCarte.valeur= paramval;
    
            return nouvelleCarte;
        }
            return null;
    
    }
    
    
    /**
     * Va afficher une carte créer par la fonction créerCarte
     * @param carte La carte créer
     */
    export function afficherCarte(carte: Carte) {
        let symbole: String;
    
        if(carte.couleur=Couleur.Pique) {
                symbole = "♠️";
        }
        if(carte.couleur=Couleur.Carreau){
                symbole = "♦️";
    }
        if(carte.couleur=Couleur.Trefle){
                symbole = "♣️";
    }
        if(carte.couleur=Couleur.Coeur){
                symbole = "♥️";
    }
    }
    
/**
 * La fonction va comparer la première avec la deuxième carte
 * @param carte1 Une première carte
 * @param carte2 Une deuxième carte
 * @returns une valeur qui sera soit positive soit nulle soit négative
 */

    export function comparerCartes(carte1: Carte, carte2: Carte): number {
        return carte1.valeur - carte2.valeur;
    }