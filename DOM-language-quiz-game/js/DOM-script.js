console.log('js is linked, yassss')

// ====== ELEMENTS NEEDED ====== //

// DEFINE CLASSES

// Phrase Class

class Phrase { 

    // constructor:
    constructor (phrase, language, translation) {
        this.phrase = phrase
        this.language = language
        this.translation = translation
        console.log(this)
    }

    // methods:
    render() {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.strokeText(this.phrase, 0.4*canvas.width, 0.2*canvas.height, 100)


    }
}

french = new Phrase ("C'est la vie", "French", "This is the life")
spanish = new Phrase ("Mi casa es su casa", "Spanish", "My house is your house")

console.log(french)
console.log(spanish)

// french.render()

// render within method

// Game Class

//Variables:
const instructionsBtn = document.querySelector('#instructions-btn')
console.log(instructionsBtn)
const playBtn = document.querySelector('#play-btn')
console.log(playBtn)
const main = document.querySelector('#main')

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// INSTRUCTIONS

// Instructions button:
instructionsBtn.addEventListener('click', () => {

    //Instructions appear:
    const instructions = document.createElement('p')
    instructions.style.backgroundColor = 'white'
    const instructionsText = document.createTextNode("There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. When a phrase appears, type in your best guess. If you're correct, you'll earn 1 point. Press 'Play' to start!")
    instructions.appendChild(instructionsText)
    main.appendChild(instructions)

})

// PLAY

//Play button:
playBtn.addEventListener('click', () => {
    main.style.backgroundImage = 'none'
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