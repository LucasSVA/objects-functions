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

const format = (num) => {

    let heure = Math.floor(num / 3600)
    let minuteInitial = Math.floor(num % 3600)
    let minute = Math.floor(minuteInitial / 60)
    let seconde = Math.floor(minuteInitial % 60)
    console.log(`${heure} : ${minute} :${seconde} `);

}



format(5800)