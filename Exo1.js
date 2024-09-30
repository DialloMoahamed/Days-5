// // //------------- Niveau 1 ----------------//
// // Réponse numero 1
// const tableau = [];


// Réponse numero 2
const tableau2 = [1, 2, 3, 4, 5, 6];
console.log(tableau2);


// Réponse numero 3
console.log(tableau2.length);


// Réponse numero 4
console.log(tableau2[0]);
console.log(tableau2[3]);
console.log(tableau2[5]);


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
console.log(itCompanies[3]);
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
console.log(joigned);
let concatener = joigned.concat(" are a big IT companies.")
console.log(concatener);


// Réponse numero 13
if (itCompanies.includes("Samsung Group")) {
    console.log("Samsung Group");
} else {
    console.log("Microsoft");
}


// Réponse numero 14
const Companes = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let array = Companes[0].split('o').length - 1
array > 1 ? "Facebook" : "";
console.log("Facebook", array);
// ------------------------
let arra = Companes[1].split('o').length - 1
array > 1 ? "Google" : "";
console.log("Google", array);
// ------------------------
let arr = Companes[2].split('o').length - 1
array > 1 ? "Microsoft" : "";
console.log("Microsoft", array);
// --------------------------
let arran = Companes[3].split('o').length - 1
console.log("Apple",arran);
// --------------------------
let arrane = Companes[4].split('o').length - 1
console.log("IBM",arrane);
// --------------------------
let arranes = Companes[5].split('o').length - 0
console.log("Oracle",arranes);
// --------------------------
let arranese = Companes[6].split('o').length - 1
console.log("Amazon",arranese);


// Réponse numero 15
const trier = itCompanies.sort();
console.log(trier);


// Réponse numero 16
const inverser = itCompanies.reverse();
console.log(inverser);


//  Réponse numero 17
 const Companieses = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
 const decoupage = Companieses.slice(0, 3);
 console.log(decoupage);


//  Réponse numero 18
 const Companiese = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
 const decoupage2 = Companiese.splice(-3);
 console.log(decoupage2);


//  Réponse numero 19
 const Companies = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
 const top3 = Companies.slice(4);

 console.log(top3);


// Réponse numero 20
const Companie = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let del = Companie.splice(1);
console.log(del);  


// Réponse numero 21
const Sompanie = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let del2 = Sompanie.splice(0, 4)
console.log(del2);


// Réponse numero 22
const Sompanies = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let del3 = Sompanies.splice(3, 1);
console.log(Sompanies);


// Réponse numero 23
console.log(itCompanies.splice());
