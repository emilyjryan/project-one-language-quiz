console.log('js is linked, yassss')

// Canvas resolution: 
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

const ctx = canvas.getContext('2d')


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
const instructions = document.querySelector('#instructions')

// DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// INSTRUCTIONS

// Instructions button:
instructions.addEventListener('click', () => {

    //instructions appear on 
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = "20px Georgia"
    ctx.strokeText("There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. When a phrase appears, type in your best guess. If you're correct, you'll earn 1 point. Press 'Play' to start!", 20, 20, canvas.width - 40)
    // ====== NEED TO FIGURE OUT TEXT WRAP ====== //

})

})

// INSTRUCTIONS

// click event for instructions button:

// canvas displays instructions in new div:
// ctx.fillText("There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. When a phrase appears, type in your best guess. If you're correct, you'll earn 1 point. Press 'Play' to start!")

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