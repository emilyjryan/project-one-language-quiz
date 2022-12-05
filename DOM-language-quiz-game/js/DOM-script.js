console.log('js is linked, yassss')

// ===== DEFINE CLASSES ===== //

// ~ Phrase Class ~ //

class Phrase { 

    static phrase = {}

    // Constructor:
    constructor (phrase, language, translation) {
        this.phrase = phrase
        this.language = language
        this.translation = translation
    }

    // Methods:
    render() {
        const phraseBox = document.createElement('p')
        phraseBox.style.backgroundColor = 'purple'
        const phraseText = document.createTextNode(this.phrase)
        phraseBox.appendChild(phraseText)
        main.appendChild(phraseBox)

    

    }
}


const spanish = new Phrase ("Mi casa es su casa", "Spanish", "My house is your house")
const french = new Phrase ("C'est la vie", "French", "This is the life")
const turkish = new Phrase ()

// Game Class

// ===== VARIABLES ===== //
const instructionsBtn = document.querySelector('#instructions-btn')
const playBtn = document.querySelector('#play-btn')
const welcomeBanner = document.querySelector('#welcome-banner')
const welcomeWords = document.querySelector('#welcome-words')
const main = document.querySelector('#main')

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// ===== INSTRUCTIONS FUNCTION ===== //

const instructionFunction = function () {
    welcomeWords.innerText = `Here's how to play:`
    main.style.backgroundImage = 'none'
    const instructions = document.createElement('p')
    instructions.style.backgroundColor = 'rgb(243, 243, 243)'
    const instructionsText = document.createTextNode("There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. When a phrase appears, type in your best guess. If you're correct, you'll earn 1 point. Press 'Play' to start!")
    instructions.appendChild(instructionsText)
    main.appendChild(instructions)
    instructions.style.fontSize = '22px'
    instructions.style.textAlign = 'center'
    // ========== STILL NEED TO FIX MULTIPLE INSTRUCTION CLICKS ========== //
}

// Instructions button:
instructionsBtn.addEventListener('click', () => {
    // Instructions appear:
    instructionFunction ()
    

})

// PLAY

//Play button:
playBtn.addEventListener('click', () => {
    // somehow resets after instructions is clicked
    main.style.backgroundImage = 'none'
    if (main.hasChildNodes = true) {
    main.removeChild(main.firstChild)
    }
    welcomeWords.innerText = `Let's go!`

    // input and submit appears

    // function to bring up first phrase

    // check user input against solution

    // if correct, ... if not correct ....

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