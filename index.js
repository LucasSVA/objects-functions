// --- ex - 1

const cat = {
    name: "Garfild",
    age: 3,
    isCute: true
}

// console.log(cat.age);

// if (cat.isCute) {

//     console.log('So cute');
// }



//---- ex - 2

// const cat2 = {
//     name: "Keso",
//     age: 5,
//     isCute: false
// }


// const cats = [cat, cat2]

// console.log(cats[0].age);
// console.log(cats[1].isCute);


// ---- ex- 3

// const checkIfEven = (num) => {

//     if ((num % 2) === 0) {
//         console.log("even");
//     } else if ((num % 2) != 0) {
//         console.log("odd");
//     }

// }

// checkIfEven(7)
// checkIfEven(8)


// ---- ex - 4

// const compare = (x, y) => {
//     if (x > y) {
//         console.log("X is bigger");

//     } else if (y > x) {
//         console.log("Y is bigger");

//     } else {
//         console.log("Both are the same");
//     }
// }

// compare(5, 5)


//---- ex - 5

// const addUp = (num) => {

//     let result = 0

//     for (let i = 0; i <= num; i++) {

//         result += i


//     }

//     return result
// }

// console.log(addUp(2));



//----- ex -6

// const format = (num) => {

//     let heure = Math.floor(num / 3600)
//     let minuteInitial = Math.floor(num % 3600)
//     let minute = Math.floor(minuteInitial / 60)
//     let seconde = Math.floor(minuteInitial % 60)
//     console.log(`${heure} : ${minute} :${seconde} `);

// }



// format(5700)


//----ex - 7


//   ====> vertion 1

// let generatePassword = (num) => {

//     if (num < 6 || num > 16) {
//         console.log("error");

//     } else {
//         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         let passwordLength = num
//         let password = " "

//         for (let i = 0; i < passwordLength; i++) {
//             let randomNumber = Math.floor(Math.random() * letters.length)
//             password += letters.substring(randomNumber, randomNumber + 1)
//             //console.log(randomNumber, randomNumber + 1);
//         }

//         console.log(password);
//     }


// }

// generatePassword(6)



//   ==>  version 2



// let generatePassword = (num) => {

//     if (num < 6 || num > 16) {
//         console.log("error");

//     } else {

//         let passwordLength = num
//         let password = " "

//         for (let i = 0; i < passwordLength; i++) {
//             let randomNumber = Math.floor(Math.random() * (90 - 64) + 64)
//             password += String.fromCharCode(randomNumber)

//         }

//         console.log(password);
//     }

// }

// generatePassword(6)



// ----- ex - 8


const launchDice = (numberOfDice) => {

    Joueur1 = 0
    Joueur2 = 0

    for (let i = 0; i <= numberOfDice; i++) {

        let randomNumber = Math.floor(Math.random() * 6) + 1
        Joueur1 += randomNumber
        //console.log(` Joueur - 1 ${Joueur1}`);
    }

    for (let i = 0; i <= numberOfDice; i++) {

        let randomNumber = Math.floor(Math.random() * 6) + 1
        Joueur2 += randomNumber
        //console.log(` Joueur -2 ${Joueur2}`);

    }

    if (Joueur1 > Joueur2) {
        console.log("Le joueur N-1 a gagné");
    } else {
        console.log("Le joueur N-2 a gagné");
    }

}

launchDice(8)