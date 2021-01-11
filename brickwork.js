function brickwork(str) {
    // convert input to an array with numbers
    let arr = str.split("\n").join(" ").split(" ").map(Number);
    // remove first num from array and return as variable wall width
    let wallWidthN = arr.shift();
    // remove first num from array and return as variable length width
    let wallLengthM = arr.shift();
    // create an empty array to store values for layer two of brickwall
    let layerTwo = [];
    //holds index for first half of next brick for layerTwo
    let brickIndex = 0;
    //holds current brick number
    let brickNum = 1;

    //check if input data is valid
    if ((wallWidthN % 2 === 0 &&
        wallLengthM % 2 === 0 &&
        wallWidthN < 100 &&
        wallLengthM < 100) &&
        //save unique numbers in arr and check if its lengh is even, to make sure
        //each value (brick-half) appears exactly two times in the input
        (Array.from(new Set(arr)).length == arr.length / 2 &&
            arr.length % 2 == 0)) {
        //loop with itterations equal to the number of brick lines in layerTwo
        for (let i = 1; i <= wallWidthN / 2; i++) {
            //loop with itterations equal to the number of brick pairs in a brickline 
            for (let j = brickIndex; j < wallLengthM + brickIndex; j += 2) {
                //check if first brick in a brick pair is horizontal
                if (arr[j] === arr[j + 1]) {
                    layerTwo[j] = brickNum;
                    layerTwo[j + wallLengthM] = brickNum;
                    layerTwo[j + 1] = brickNum += 1;
                    layerTwo[j + wallLengthM + 1] = brickNum;
                    brickNum += 1;
                } else if (arr[j] === arr[j + wallLengthM]) {
                    //check if first brick in a brick pair is vertical
                    layerTwo[j] = brickNum;
                    layerTwo[j + 1] = brickNum;
                    layerTwo[j + wallLengthM] = brickNum += 1;
                    layerTwo[j + wallLengthM + 1] = brickNum;
                    brickNum += 1;
                } else if (arr[j] !== arr[j + wallLengthM]) {
                    //vertical check for different brick half numbers
                    layerTwo[j] = brickNum;
                    layerTwo[j + 1] = brickNum;
                    layerTwo[j + wallLengthM] = brickNum += 1;
                    layerTwo[j + wallLengthM + 1] = brickNum;
                    brickNum += 1;
                }
            }

            //adjust layertwo array index for every new line of bricks
            brickIndex += 2 * wallLengthM;
        }

        for (let k = 0; k < arr.length; k += wallLengthM - 1) {
            let print = layerTwo.splice(0, wallLengthM);
            console.log(print.join("-*-"));
        }

    } else {
        console.log(-1);
    }
}


console.log(`1-Example-1`);
brickwork(`2 4
1 1 2 2
3 3 4 4`);
console.log(`2-Example-2`);
brickwork(`2 8
1 1 2 2 6 5 5 8
3 3 4 4 6 7 7 8`);
console.log(`3-Example-3`);
brickwork(`4 8
1 2 2 12 5 7 7 16
1 10 10 12 5 15 15 16
9 9 3 4 4 8 8 14
11 11 3 13 13 6 6 14`);
console.log(`4------------`);
brickwork(`2 4
5 1 2 2
3 3 4 4`);
console.log(`5------------`);
brickwork(`2 4
1 1 2 2
5 3 4 4`);
console.log(`6------------`);
brickwork(`2 4
1 3 2 2
1 3 4 4
1 5 6 6
5 5 7 7`);
