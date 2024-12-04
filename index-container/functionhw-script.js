// Function to count the digits in a number
function numOfDigits(number) {
    return Math.abs(number).toString().length;  // Convert to positive, then to string, and get the length
}

// Function to display the result on the page
function showNumOfDigits() {
    const input = document.getElementById('numberInput').value;
    if(input === '' || isNaN(input)) { // Check if input is valid
        document.getElementById('digitsResult').textContent = "Invalid input. Enter an integer.";
        return;
    }
    const digitCount = numOfDigits(parseInt(input, 10)); // Convert input string to integer and count digits
    document.getElementById('digitsResult').textContent = `Number of digits: ${digitCount}`; // Display digit count
}

// Function that moves all capital letters to the front of a word
function capsToFront(word) {
    const capitals = word.match(/[A-Z]/g) || [];
    const nonCapitals = word.match(/[^A-Z]/g) || [];
    return capitals.join('') + nonCapitals.join('');
}
// Function to display it ^ to the webpage
function displayCapsToFront() {
    const inputWord = document.getElementById("inputWord").value;
    const result = capsToFront(inputWord);
    document.getElementById("capsResult").textContent = "Result: " + result; // Display result in capsResult <p>
}

// Function for reversing a long string by word
function reverseString(str) {
    return str.split(' ').reverse().join(' '); // split string by word, reverse array, join back into stirng
}

// Function for displaying reversed string to web page
function displayReverseStr() {
    const inputStr = document.getElementById("inputStr").value;
    const result = reverseString(inputStr);
    document.getElementById("reverseStrResult").textContent = "Result: " + result;
}

