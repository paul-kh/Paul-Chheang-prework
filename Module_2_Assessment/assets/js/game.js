
// Global variables
let currentWord;
let wordDescription;
let imageURL;
let currentIndex;
let hashArray = [];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function that initializes the current word, imageURL, description, current array index, and hash array
const initializeGame = () => {
    // Initialize the current word, imageURL, description, and current array index
    // by randomizing the index of the secretWords object array
    let randIndex = Math.floor(Math.random() * secretWords.length);
    currentWord = secretWords[randIndex].word;
    console.log("Current word: ", currentWord);
    currentIndex = randIndex;
    imageURL = secretWords[randIndex].image;
    wordDescription = secretWords[randIndex].description;

    // Initialize hash array with by masking each letter of the current word with "_" 
    // except "space" which remains no mask
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == " ") {
            hashArray.push(" ");
        } else hashArray.push("_");
    }
    displayHashWord(hashArray);
    
    document.onkeypress = (event) => {
        console.log(event.key.toUpperCase());
        // Check to make sure that the user pressed alphabet key
        checkUserInput(event.key.toUpperCase());
    }
}

/* Display current word in hashing to the screen
*/
const displayHashWord = (hashArr) => {
    console.log(hashArray.join(" "));
}

const startGame = () => {
    document.onkeypress = (event) => {
        if (event.key) initializeGame();
    } 
}

const checkUserInput = guess => {
    if (alphabets.includes(guess)) {
        console.log("Valid input: ", guess);
    } else console.log("Invalid input: ", guess);
}

startGame();


