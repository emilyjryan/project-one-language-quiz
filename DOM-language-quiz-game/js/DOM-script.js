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

// Game visuals:
const langStats = document.querySelector('#lang-stats')
const instructionsBox = document.querySelector('#instructions-box')
const inputBox = document.querySelector('#input-box')
const submitBtn = document.querySelector('#submit-btn')
const playBoxes = document.querySelector('#play-boxes')
const levelBox = document.querySelector('#level-box')
const phraseText = document.querySelector('#phrase-text')
const translationText = document.querySelector('#translation-text')
const hintText = document.querySelector('#hint-text')
const resultText = document.querySelector('#result-text')

// ===== DEFINE CLASSES ===== //

// ~ Phrase Class ~ //

class Phrase { 

    static score = 0

    // Constructor:
    constructor (level, phrase, language, translation, hint, flag) {
        this.level = `LEVEL ${level}:`
        this.phrase = phrase
        this.language = language
        this.translation = `This means ${translation} in what language?`
        this.hint = `(Hint: ${hint})`
        this.flag = flag
    }

    // Methods:
    render() {
        playBoxes.style.display = 'block'
        levelBox.innerText = this.level
        phraseText.innerText = this.phrase
        translationText.innerText = this.translation
        hintText.innerText = this.hint
        

    }
    
    checkGuess () {
        resultText.style.display = 'block'
        if (inputBox.value.toLowerCase() === this.language) {
        resultText.innerText = `Correct! The language is ${this.language} ${this.flag}`
        Phrase.score++
        console.log(Phrase.score)
        } else if (inputBox.value === '') {
        resultText.innerText = "Take a guess!" 
        } else {
            resultText.innerText = `Sorry, that's incorrect. The language is ${this.language} ${this.flag}. Press 'Next' to move on!`
            console.log(Phrase.score)
        }
    }

}

// ===== Phrases List ===== //

const spanish = new Phrase (
    "1", 
    "\"Mi casa es su casa.\"", 
    "spanish", 
    "\"my house is your house\"", 
    "You might want to go salsa dancing with someone who speaks this language 🕺🏽💃🏻",
    "🇲🇽🇪🇸"
)

const french = new Phrase (
    "2", 
    "\"C'est la vie.\"", 
    "french", 
    "\"this is the life\"", 
    "Think berets 👩🏻‍🎨, croissants 🥐, a giant tower...",
    "🇫🇷"
)

const german = new Phrase (
    "3", 
    "\"Es freut mich Sie kennenzulernen\"", 
    "german", 
    "\"nice to meet you\"", 
    "Makes me want to wear a lederhosen while eating a schnitzel, amiright?",
    "🇩🇪"
)

const korean = new Phrase (
    "4", 
    "\"감사합니다 (gamsahamnida)\"", 
    "korean", 
    "\"thank you\"",
    "All the members of your fav KPOP band BTS speak this language",
    "🇰🇷"
)

const japanese = new Phrase (
    "5", 
    "\"愛してる(aishi teru)\"", 
    "japanese", 
    "\"i love you\"",
    "Land of cherry blossoms 🌸 and allllll the sushi 🍣",
    "🇯🇵"
)

const hindi = new Phrase (
    "6", 
    "\"मोसम केसा हे\? (mosam kesa he\?)\"", 
    "hindi", 
    "\"how is the weather?\"",
    "The national symbol of this language's main country is a really big kitty 🐅",
    "🇮🇳"
)

const swedish = new Phrase (
    "7", 
    "\"jag är riktigt hungrig!\"", 
    "swedish", 
    "\"i'm very hungry\"",
    "Master this language and you'd be a pro at pronouncing IKEA product names",
    "🇸🇪"
)

const chinese = new Phrase ("8", 
    "\"你好吗\?(nǐ hǎo ma?)\"", 
    "chinese", 
    "\"how are you\"",
    "Speakers of this language could walk along a super long wall with a GREAT view",
    "🇨🇳"
)

const russian = new Phrase (
    "9", 
    "\"я люблю языки (ya lyublyu yazyki)\"", 
    "russian", 
    "\"i love languages\"",
    "Is it tsar or czar? I always forget",
    "🇷🇺"
)

const icelandic = new Phrase (
    "10", 
    "\"þetta er síðasta tungumálið\"", 
    "icelandic", 
    "\"this is the last language\"",
    "Walter Mitty was truly living his best life skateboarding down those hills",
    "🇮🇸"
)


const allPhrases = [spanish, french, german, korean, japanese, hindi, swedish, chinese, russian, icelandic]

// ===== DOM CONTENT LOADED ===== //
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// ===== INSTRUCTIONS FUNCTION ===== //

const instructionFunction = function () {
    console.log('instruction function invoked')
    welcomeWords.innerText = `Here's how to play:`
    langStats.style.display = 'block'
    instructionsBox.style.display = 'block'
    main.style.backgroundImage = 'none'
    instructionsBox.innerText = "There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. You will also be given a hint about each language to help you in your identification. When a phrase appears, type in your best guess and then click 'Submit'. If you guess correctly, you'll earn 1 point. Press 'Play' to start!"}

// Instructions button:
instructionsBtn.addEventListener('click', () => {
    // Instructions appear:
    console.log('instruction button clicked')
    instructionFunction () })

// ===== PLAY FUNCTIONS ===== //

// ~ START GAME ~ //
const startGame = () => {
     // resets after instructions is clicked
     console.log('play button clicked')
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
}
let phraseIndex = 0

// ~ CHECK GUESS ON SUBMIT BUTTON ~ //
submitBtn.addEventListener('click', () => {
    console.log('submit button clicked')
    allPhrases[phraseIndex].checkGuess()
    nextBtn.style.display = 'block'
    score.innerText = `Score: ${Phrase.score}`
})

// ~ GO TO NEXT PHRASE ON NEXT BUTTON ~ //
nextBtn.addEventListener('click', () => {
    console.log('next button clicked')
    console.log(phraseIndex)
    inputBox.innerText = ''
    if (phraseIndex === 9) {
     nextBtn.style.display = 'none'
     playBoxes.style.display = 'none'
     inputBox.style.display = 'none'
     submitBtn.style.display = 'none'
     resultText.innerText = `All done! Your final score is ${Phrase.score}/10 points. Awesome job!`
    } else {
    resultText.style.display = 'none'
    nextBtn.style.display = 'none'
    inputBox.value = ''
    phraseIndex++
    allPhrases[phraseIndex].render()
    }
})

// ===== PLAY BUTTON CLICKED ===== //
playBtn.addEventListener('click', () => {
    main.style.backgroundColor = 'var(--oxford-blue)';
    langStats.style.display = 'none'
    startGame()
    if (phraseIndex === 0) {
        console.log('play button invoked')
        allPhrases[phraseIndex].render()
    }
})

// ===== RESTART BUTTON ===== //
restartBtn.addEventListener('click', () => {
    phraseIndex = 0
    Phrase.score = 0
    score.innerText = 'Score:'
    console.log(phraseIndex)
    console.log(Phrase.score)
    playBoxes.style.display = 'none'
    resultText.style.display = 'none'
    main.style.backgroundImage = "url('../images/welcome-diff-langs.jpeg')";
    inputBox.innerText = ''
    inputBox.style.display = 'none'
    submitBtn.style.display = 'none'
    nextBtn.style.display = 'none'
    restartBtn.style.display = 'none'
    instructionsBtn.style.display = 'block'
    playBtn.style.display = 'block'
    welcomeWords.innerText = 'Welcome to Language Quiz!'
})

})