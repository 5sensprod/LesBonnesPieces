// Récupération des données
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l’élément img
    const imageElement = document.createElement("img");
    // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    imageElement.src = article.image;
    // On crée l’élément h2 pour le nom de la pièce.
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    // On crée l’élément p pour le prix de la pièce.
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "Non catégorisé";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description";
    const stockElement = document.createElement("p");
    stockElement.innerText = `${article.disponibilite ? "En stock" : "En rupture de stock"}`;


    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    // On rattache le nom à pieceElement (la balise article)
    pieceElement.appendChild(nomElement);
    // On rattache le prix à pieceElement (la balise article)
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
}

// Bouton de tri
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    // console.log(piecesOrdonnees);
});

// Bouton de tri décroissant usage de la méthode sort()
const btnTrierDecroissant = document.querySelector(".btn-trier-decroissant");
btnTrierDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    // console.log(piecesOrdonnees);
});

// Bouton de filtrage  usage de la méthode filter()
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});

const boutonFiltrerNoDescription = document.querySelector(".btn-filtrer-no-description");
boutonFiltrerNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description === undefined;
    });
    // console.log(piecesFiltrees);
});

//on va créer un tableau qui contient le nom des pièces
const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1);
    }
}
console.log(noms);

//Création de la liste abordables
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(abordablesElements)


    // exercice 2
const nomsDisponibles = pieces.map(piece => piece.nom);

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomsDisponibles.splice(i, 1);
    }
}

const disponiblesElements = document.createElement('ul');

for (let i = 0; i < nomsDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${pieces[i].prix}€`;
    disponiblesElements.appendChild(nomElement);
}

document.querySelector('.disponibles')
    .appendChild(disponiblesElements);

// exercice 3 innerHTML
// Efface le contenu de la balise body et donc l’écran
document.querySelector(".fiches").innerHTML = '';