function generateAll(numbersInGame, numbersPerRow, numbersToGuarantee) {
    //create array with all possible numbers
    let numbersNotPicked = [];
    for(let i = 1; i <= numbersInGame; i++) {
        numbersNotPicked.push(i);
    }



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

function generateArray(startNumber, endNumber) {
    let numbersArray = [];
    for(let i = startNumber; i <= endNumber; i++) {
        numbersArray.push(i);
    }

    return numbersArray;
}