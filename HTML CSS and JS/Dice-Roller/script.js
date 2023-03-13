function diceRoller() {
    //Generate random number.
    function randomNumber (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let text = document.getElementById('txt'); //Get text element from HTML.
    let textValue = Number(text.value); //Transform text input in number value.
    let dice = randomNumber(1, textValue); //Let call for the function with min fixed and varible user input.
    let diceResult = document.getElementById('diceres'); //Get <p> element from HTML.
    diceResult.innerHTML = dice; //Show let dice value.
}




