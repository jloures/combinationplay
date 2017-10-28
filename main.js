function generateAll(arrayWithNumbers, numbersPerRow, numbersToGuarantee) {
    let sizeOfPickNotVarying = numbersToGuarantee - 1;
    let sizeOfPickVarying = numbersPerRow - sizeOfPickNotVarying;
    let combinationsArray = [];
    let combinationNumber = 1;
    for(let i = 0; i < arrayWithNumbers.length - numbersPerRow; i += 1) {
        let combinationArray = [];
        for(let j = i; (j - i) < sizeOfPickNotVarying; j++) {
            combinationArray[j-i] = arrayWithNumbers[j];
        }
        for(let z = (i + sizeOfPickNotVarying); z < arrayWithNumbers.length; z += sizeOfPickVarying ) {
            for(let k = 0; (k + sizeOfPickNotVarying)< numbersPerRow; k++ ) {
                let newNumber = arrayWithNumbers[k + z];
                if( newNumber ) {
                        combinationArray[k + sizeOfPickNotVarying] = newNumber;
                }
            }
            combinationsArray.push(combinationArray);
            combinationNumber++;
        }
    }
    console.log(combinationNumber);
    return combinationsArray;
}

function generateCombinations (startNumber, endNumber, totalNumbersToBePicked, arrayOfNumbers) {
    var totalCombinationsGenerated = 0;
    var arrayWithCombinations = [];
    let generateCombinations =  (startNumber, endNumber, numbersLeft, arrayOfNumbersPicked) => {
        
        if( numbersLeft === 0 ) {
            return;
        }
        for(let i = startNumber; i <= endNumber; i++) {
            arrayOfNumbersPicked[totalNumbersToBePicked - numbersLeft] = arrayOfNumbers[i-1];
            generateCombinations(i + 1, endNumber, numbersLeft - 1, arrayOfNumbersPicked);
            if(numbersLeft === 1) {
                //add anything custom you want here
                totalCombinationsGenerated++;
                arrayWithCombinations.push(cloneArray(arrayOfNumbersPicked));
            }
        }
    }
    generateCombinations(startNumber, endNumber, totalNumbersToBePicked, []);
    return arrayWithCombinations;
}

function pickRandomNumbers(arrayOfNumbersToPick, numbersToPick) {
    //pick the random numbers from an array
    //make sure that they are all different
    let arrayOfNumbersPicked = [];
    let sizeOfNumbersPool = arrayOfNumbersToPick.length;
    for(let i = 0; i < numbersToPick;) {
        let indexOfChosenNumber = Math.floor(Math.random() * sizeOfNumbersPool);
        let chosenNumber = arrayOfNumbersToPick[indexOfChosenNumber];
        if( !arrayOfNumbersPicked.find( num => num === chosenNumber ) ) {
            //add number to array
            arrayOfNumbersPicked.push(chosenNumber);
            i++;
        }
    }
    return arrayOfNumbersPicked;
}

function cloneArray(originalArray) {
    let cloneArray = [];
    for(let i = 0; i < originalArray.length; i++) {
        cloneArray.push(originalArray[i]);
    }
    return cloneArray;
}

function generateArray(startNumber, endNumber, isRandom) {
    let numbersArray = [];
    for(let i = startNumber; i <= endNumber; i++) {
        numbersArray.push(i);
    }
    if( isRandom ) {
        for (let i = numbersArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];
        }
    }
    return numbersArray;
}

function generateGuarantee(totalNumbers, numbersPerRow, numbersToGuarantee) {
    let randomNumberArray = generateArray(1,totalNumbers,true);
    console.log(randomNumberArray)
    let combinationsArray = generateAll(randomNumberArray, numbersPerRow, numbersToGuarantee);
    return combinationsArray;
}

function test() {

    let combinationsArray = generateGuarantee(49, 6, 3);
    let newArray = generateArray(1,49,false);
    let arrayOfCombinationsOf3 = generateCombinations(1, 49, 3, newArray);
    for(let j = 0; j < arrayOfCombinationsOf3.length; j++) {
        let current3Combination = arrayOfCombinationsOf3[j];
        let o = 1;
        console.log(combinationsArray.length)
        console.log("here")
        console.log(current3Combination)
        if( !combinationsArray.some( 
            combination => {
                for(let z = 0; z < 3; z++) {
                    if( !combination.some( num => num === current3Combination[z])) {
                        return false;
                    }
                }
                return true;
            }
        )) {
            return false;
        }
    }
    return true;
}

console.log(test());

