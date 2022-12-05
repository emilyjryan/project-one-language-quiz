console.log('js is linked, yassss')

// ===== VARIABLES ===== //

// Buttons:
const instructionsBtn = document.querySelector('#instructions-btn')
const playBtn = document.querySelector('#play-btn')
const restartBtn = document.querySelector('#restart-btn')
const nextBtn = document.querySelector('#next-btn')

// Divs:
const welcomeWords = document.querySelector('#welcome-words')
const main = document.querySelector('#main')
const score = document.querySelector('#score')

// Play the game:
const instructionsBox = document.querySelector('#instructions-box')
const inputBox = document.querySelector('#input-box')
const submitBtn = document.querySelector('#submit-btn')
const playBoxes = document.querySelector('#play-boxes')
const levelBox = document.querySelector('#level-box')
const phraseText = document.querySelector('#phrase-text')
const translationText = document.querySelector('#translation-text')
const resultText = document.querySelector('#result-text')


// ===== DEFINE CLASSES ===== //

// ~ Phrase Class ~ //

class Phrase { 

    static phrase = {}

    // Constructor:
    constructor (level, phrase, language, translation) {
        this.level = `Level ${level}:`
        this.phrase = phrase
        this.language = language
        this.translation = `This means ${translation} in what language?`
    }

    // Methods:
    render() {
        playBoxes.style.display = 'block'
        levelBox.innerText = this.level
        phraseText.innerText = this.phrase
        translationText.innerText = this.translation
    }
    
    checkGuess () {
        // playBoxes.style.display = 'none'
        resultText.style.display = 'block'
        if (inputBox.value.toLowerCase() === this.language) {
        resultText.innerText = "Correct! Nice work! 😎"
        } else if (inputBox.value === '') {
        resultText.innerText = "Take a guess!" 
        } else {
            resultText.innerText = "Sorry, that's incorrect. Press 'Next' to move on!"
        }
    }
}


const spanish = new Phrase ("1", "\"Mi casa es su casa.\"", "spanish", "\"my house is your house\"")
const french = new Phrase ("2", "\"C'est la vie.\"", "french", "\"this is the life\"")
const german = new Phrase ("3", "\"Es freut mich Sie kennenzulernen\"", "german", "\"nice to meet you\"")
const korean = new Phrase ("4", "\"감사합니다 (gamsahamnida)\"", "korean", "\"thank you\"")
const japanese = new Phrase ("5", "\"愛してる(itoshi teru\"", "japanese", "\"i love you\"")

const allPhrases = [spanish, french, german, korean, japanese]

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// ===== INSTRUCTIONS FUNCTION ===== //

const instructionFunction = function () {
    welcomeWords.innerText = `Here's how to play:`
    instructionsBox.style.display = 'block'
    main.style.backgroundImage = 'none'
    instructionsBox.innerText = "There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. When a phrase appears, type in your best guess and then click 'Submit'. If you're correct, you'll earn 1 point. Press 'Play' to start!"}

// Instructions button:
instructionsBtn.addEventListener('click', () => {
    // Instructions appear:
    instructionFunction ()

})

// ===== PLAY FUNCTION ===== //

//Play button:
playBtn.addEventListener('click', () => {
    // resets after instructions is clicked
    main.style.backgroundImage = 'none'
    instructionsBox.style.display = 'none'

    // instructions/play bar disappears:
    instructionsBtn.style.display = 'none'
    playBtn.style.display = 'none'
    welcomeWords.innerText = `Let's go!`

    // input and submit appears
    inputBox.style.display = 'block';
    submitBtn.style.display = 'block';
    restartBtn.style.display = 'block';



    for (let i = 0; i < allPhrases.length; i++) {
        allPhrases[i].render()

        // check user input against solution
        submitBtn.addEventListener('click', () => {
            allPhrases[i].checkGuess()
            nextBtn.style.display = 'block'
        })

        nextBtn.addEventListener('click', () => {
            resultText.style.display = 'none'
            nextBtn.style.display = 'none'
            inputBox.innerText = ''
            allPhrases[i+1].render()
        })
    }

})

})