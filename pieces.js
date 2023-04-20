// Récupération des données
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

// // Création des balises HTML
// const article = pieces[0];
// const imageElement = document.createElement('img');
// imageElement.src = article.image;
// const nomElement = document.createElement("h2");
// nomElement.innerText = article.nom;
// const prixElement = document.createElement("p");
// prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// const categorieElement = document.createElement("p");
// categorieElement.innerText = article.categorie ?? "Non catégorisé";
// const descriptionElement = document.createElement("p");
// descriptionElement.innerText = article.description ?? "Pas de description";
// const stockElement = document.createElement("p");
// stockElement.innerText = `${article.disponibilite ? "En stock" : "En rupture de stock"}`;
// // Ajout des éléments au DOM
// const sectionFiches = document.querySelector(".fiches");
// sectionFiches.appendChild(imageElement);
// sectionFiches.appendChild(nomElement);
// sectionFiches.appendChild(prixElement);
// sectionFiches.appendChild(categorieElement);
// sectionFiches.appendChild(descriptionElement);
// sectionFiches.appendChild(stockElement);

for (let i = 0; i < pieces.length; i++) {

    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // On crée l’élément img.
    const imageElement = document.createElement("img");
    // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
    imageElement.src = pieces[i].image;
    // On crée l’élément h2 pour le nom de la pièce.
    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;
    // On crée l’élément p pour le prix de la pièce.
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "Non catégorisé";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description ?? "Pas de description";
    const stockElement = document.createElement("p");
    stockElement.innerText = `${pieces[i].disponibilite ? "En stock" : "En rupture de stock"}`;
    

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
