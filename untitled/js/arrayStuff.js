function workWArrays() {
    // both are empty arrays
    // let fruits = [];
    let fruits2 = new Array();

    let fruits3 = ["Apple", 'Berry', "Cherry", 44];
    fruits3[3] = "Donut";
    fruits3.push("eggs");
    console.log("Fruits Size=" + fruits3.length);
    console.log(fruits3);

    let appleCherry = fruits3[0] + fruits3[2];
    for(let i=0 ; i<fruits3.length; i++){
        console.log(fruits3[i]);
    }
    console.log("--------------------------------");
    fruits3.forEach( (fruit, index) => {
        console.log(`index:${ index } value:${fruit}`); // callback function that is async
    })
    console.log("--BLAH ---- ")

    let f1 = fruits3.shift(); // first element
    console.log(fruits3);
    let f2 = fruits3.pop(); // last element
    console.log(fruits3);
    let index = fruits3.indexOf("Cherryxxxxxxx");
    console.log("inx=" + index);
    console.log("--------------------------------");
    let fruits = ["A", "B", "C", "D", "E", "F"];
    let someFruits = fruits.slice(0, 2);
    console.log(someFruits);

    let lowerCase = fruits.map( fruit => fruit.toLowerCase());
    console.log(lowerCase);

    fruits.sort();
    fruits.reverse();

    if (fruits.includes("Apple")) {
        console.log(`Apple`);
    }
}