// //------------- Niveau 1 ----------------//
// Réponse numero 1
const tableau = Array();


// Réponse numero 2
const tableau2 = [1, 2, 3, 4, 5];
console.log(tableau2);


// Réponse numero 3
console.log(tableau2.length);


// Réponse numero 4
console.log(tableau2[0]);
console.log(tableau2[2]);
console.log(tableau2[4]);


// Réponse numero 5
const mixedDataTypes = [1, "Mohamed", 'HTML','CSS','JavaScript', false, true];
console.log(mixedDataTypes.length);


// Réponse numero 6
const itCompanies = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Réponse numero 7
console.log(itCompanies);


// Réponse numero 8
console.log(itCompanies.length);


// Réponse numero 9
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[6]);


// Réponse numero 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);


// Réponse numero 11
let majF = itCompanies[0].toUpperCase();
console.log(majF);
let majG = itCompanies[1].toUpperCase();
console.log(majG);
let majM = itCompanies[2].toUpperCase();
console.log(majM);
let majA = itCompanies[3].toUpperCase();
console.log(majA);
let majI = itCompanies[4].toUpperCase();
console.log(majI);
let majO = itCompanies[5].toUpperCase();
console.log(majO);
let majAm = itCompanies[6].toUpperCase();
console.log(majAm);


// Réponse numero 12
let joigned = itCompanies.join()
let concatener = joigned.concat(" are a big IT companies.")
console.log(concatener);


// Réponse numero 13
if (itCompanies.includes("Samsung Group")) {
    console.log("Samsung Group");
} else {
    console.log("Microsoft");
}


// Réponse numero 14
const companiesWithMultipleO = itCompanies.filter(company => company.split('o').length - 1 > 1);

console.log(companiesWithMultipleO);