console.log('js is linked, yassss')

// ===== VARIABLES ===== //

// Buttons:
const instructionsBtn = document.querySelector('#instructions-btn')
const playBtn = document.querySelector('#play-btn')
const restartBtn = document.querySelector('#restart-btn')

// Divs:
const welcomeWords = document.querySelector('#welcome-words')
const main = document.querySelector('#main')
const score = document.querySelector('#score')

// Play the game:
const instructionsBox = document.querySelector('#instructions-box')
const inputBox = document.querySelector('#input-box')
const submitBtn = document.querySelector('#submit-btn')
const playBoxes = document.querySelector('#play-boxes')
const phraseText = document.querySelector('#phrase-text')
const translationText = document.querySelector('#translation-text')
const resultText = document.querySelector('#result-text')


// ===== DEFINE CLASSES ===== //

// ~ Phrase Class ~ //

class Phrase { 

    static phrase = {}

    // Constructor:
    constructor (phrase, language, translation) {
        this.phrase = phrase
        this.language = language
        this.translation = `This means: ${translation} in what language?`
    }

    // Methods:
    render() {
        playBoxes.style.backgroundColor = 'lavender'
        playBoxes.style.textAlign = 'center'
        playBoxes.style.display = 'block'
        phraseText.innerText = this.phrase
        translationText.innerText = this.translation
    }
    
    checkGuess () {
        playBoxes.style.display = 'none'
        resultText.style.display = 'block'
        if (inputBox.value === this.language) {
        resultText.innerText = "Correct! Nice work!"
        } else {
            resultText.innerText = "Incorrect! Bummer!"

        }
    }
}


const spanish = new Phrase ("\"Mi casa es su casa.\"", "Spanish", "\"My house is your house\"")
const french = new Phrase ("\"C'est la vie.\"", "French", "\"This is the life\"")

// const italian = new Phrase ()
// const turkish = new Phrase ()
// const korean = new Phrase ()

// allPhrases = [spanish, french, italian, turkish, korean]

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// ===== INSTRUCTIONS FUNCTION ===== //

const instructionFunction = function () {
    welcomeWords.innerText = `Here's how to play:`
    instructionsBox.style.display = 'block'
    main.style.backgroundImage = 'none'
    instructionsBox.innerText = "There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. When a phrase appears, type in your best guess. If you're correct, you'll earn 1 point. Press 'Play' to start!"}

// Instructions button:
instructionsBtn.addEventListener('click', () => {
    // Instructions appear:
    instructionFunction ()

})

// PLAY

//Play button:
playBtn.addEventListener('click', () => {
    // resets after instructions is clicked
    main.style.backgroundImage = 'none'
    instructionsBox.style.display = 'none'
    welcomeWords.innerText = `Let's go!`

    // input and submit appears
    inputBox.style.display = 'block';
    submitBtn.style.display = 'block';
    restartBtn.style.display = 'block';

    // function to bring up first phrase
    spanish.render()

    // check user input against solution
    submitBtn.addEventListener('click', () => {
        spanish.checkGuess()
    })

    // next level
    



})
})

// PLAY

// starts GAME
// Instructions button disappears
// Input bar appears
// Play button disappears
// Submit button appears

// PHRASES

// phrases array with key-value pairs
// 1st phrase from the list is generated on screen
// input bar with submit button are rendered
// click event for submit button
// 