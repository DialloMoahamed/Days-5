// Reponse numero 1
// Voir dans les fichiers countries.js,web_techs.js

// Reponse numero 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words)
console.log(words.length)


// Reponse numero 3
//----------- Ajout au debut du tableau -----------//
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let ajout = shoppingCart.unshift('Viande');
console.log(ajout);
//----------- Ajout à la fin du tableau -----------//
let ajouter = shoppingCart.push('sucre');
console.log(ajouter);
//----------- Remove -----------//
let remove = shoppingCart.splice(4, 1);
console.log(remove);
//----------- Replace -----------//
let replace = shoppingCart.splice(3, 1,'thé vert')
console.log(replace);
