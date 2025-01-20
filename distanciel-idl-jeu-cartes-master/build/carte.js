"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparerCartes = exports.afficherCarte = exports.creerCarte = exports.Couleur = void 0;
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Pique"] = 0] = "Pique";
    Couleur[Couleur["Carreau"] = 1] = "Carreau";
    Couleur[Couleur["Trefle"] = 2] = "Trefle";
    Couleur[Couleur["Coeur"] = 3] = "Coeur";
})(Couleur = exports.Couleur || (exports.Couleur = {}));
function creerCarte(paramclr, paramval) {
    let nouvelleCarte;
    if (paramval <= 14 && paramval >= 2) {
        nouvelleCarte.couleur = paramclr;
        nouvelleCarte.valeur = paramval;
        return nouvelleCarte;
    }
    return null;
}
exports.creerCarte = creerCarte;
function afficherCarte(carte) {
    let symbole;
    if (carte.couleur = Couleur.Pique) {
        symbole = "♠️";
    }
    if (carte.couleur = Couleur.Carreau) {
        symbole = "♦️";
    }
    if (carte.couleur = Couleur.Trefle) {
        symbole = "♣️";
    }
    if (carte.couleur = Couleur.Coeur) {
        symbole = "♥️";
    }
}
exports.afficherCarte = afficherCarte;
function comparerCartes(carte1, carte2) {
    return carte1.valeur - carte2.valeur;
}
exports.comparerCartes = comparerCartes;
//# sourceMappingURL=carte.js.map