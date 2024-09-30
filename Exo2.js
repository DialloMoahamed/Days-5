// Reponse numero 1
// Voir dans les fichiers countries.js,web_techs.js

// Reponse numero 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[.,]/g, '')
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


// Reponse numero 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  if (countries.includes("Ethiopia")) {
    console.log(countries[4].toUpperCase());
  } else {
    console.log(countries.push("Ethiopia"));
  }


// Reponse numero 5
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  if (webTechs.includes("Sass")) {
    console.log(webTechs.push("Sass is a CSS preprocess"));
  } else {
    console.log(webTechs.push("Sass"));
    console.log(webTechs);
  }


// Reponse numero 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);