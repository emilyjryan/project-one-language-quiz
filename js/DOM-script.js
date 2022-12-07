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
const phraseAudio = document.querySelector('#phrase-audio')
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

    // ~ Render function for each phrase: ~ //
    render() {
        playBoxes.style.display = 'block'
        levelBox.innerText = this.level
        phraseText.innerText = this.phrase
        translationText.innerText = this.translation
        hintText.innerText = this.hint
    }
    
    // ~ Function that compares guess language with correct language: ~ //
    checkGuess () {
        resultText.style.display = 'block'
        if (inputBox.value.toLowerCase() === this.language) {
        resultText.innerText = `Correct!
        The language is ${this.language} ${this.flag}`
        Phrase.score++
        console.log(Phrase.score)
        } else if (inputBox.value === '') {
        resultText.innerText = "Take a guess!" 
        } else {
            resultText.innerText = `Sorry, ${inputBox.value} is incorrect.
            The correct language is ${this.language} ${this.flag}.
            Press 'Next' to move on!`
            console.log(Phrase.score)
        }
    }
}

// ===== Phrases List ===== //

const spanish = new Phrase (
    "1", 
    "\"Mi casa es tu casa.\"", 
    "spanish", 
    "\"my house is your house\"", 
    "Makes me feel like salsa dancing 🕺🏽💃🏻",
    "🇲🇽🇪🇸"
)
const spanishAudio = new Audio('../audio-clips/spanish-audio.mp3')

const french = new Phrase (
    "2", 
    "\"C'est la vie.\"", 
    "french", 
    "\"this is the life\"", 
    "Think berets 👩🏻‍🎨, croissants 🥐, a giant tower...",
    "🇫🇷"
)
const frenchAudio = new Audio('../audio-clips/french-audio.mp3')

const german = new Phrase (
    "3", 
    "\"Freut mich, Sie kennenzulernen\"", 
    "german", 
    "\"nice to meet you\"", 
    "Nothing quite like eating a schnitzel while wearing a lederhosen, amiright?",
    "🇩🇪"
)
const germanAudio = new Audio('../audio-clips/german-audio.mp3')

const korean = new Phrase (
    "4", 
    "\"감사합니다 (gamsahamnida)\"", 
    "korean", 
    "\"thank you\"",
    "All the members of your fav KPOP band BTS speak this language",
    "🇰🇷"
)
const koreanAudio = new Audio('../audio-clips/korean-audio.mp3')

const japanese = new Phrase (
    "5", 
    "\"友達になろう (tomodachi ni narou)\"", 
    "japanese", 
    "\"let\'s be friends\"",
    "Land of cherry blossoms 🌸 and allllll the sushi 🍣",
    "🇯🇵"
)
const japaneseAudio = new Audio('../audio-clips/japanese-audio.mp3')

const hindi = new Phrase (
    "6", 
    "\"क्या आज मौसम अच्छा है\? (kya aaj mausam achchha hai\?)\"", 
    "hindi", 
    "\"is the weather nice today?\"",
    "The national symbol of this language's main country is a really big kitty 🐅",
    "🇮🇳"
)
const hindiAudio = new Audio('../audio-clips/hindi-audio.mp3')

const swedish = new Phrase (
    "7", 
    "\"jag är väldigt hungrig just nu!\"", 
    "swedish", 
    "\"i'm very hungry right now\"",
    "Master this language and you'd be a pro at pronouncing IKEA product names",
    "🇸🇪"
)
const swedishAudio = new Audio('../audio-clips/swedish-audio.mp3')

const chinese = new Phrase (
    "8", 
    "\"你好吗\?(nǐ hǎo ma?)\"", 
    "chinese", 
    "\"how are you\"",
    "Speakers of this language could walk along a super long wall with a GREAT view",
    "🇨🇳"
)
const chineseAudio = new Audio('../audio-clips/chinese-audio.mp3')


const russian = new Phrase (
    "9", 
    "\"я люблю языки (ya lyublyu yazyki)\"", 
    "russian", 
    "\"i love languages\"",
    "Is it tsar or czar? I always forget",
    "🇷🇺"
)
const russianAudio = new Audio('../audio-clips/russian-audio.mp3')

const icelandic = new Phrase (
    "10", 
    "\"þetta er síðasta tungumálið\"", 
    "icelandic", 
    "\"this is the last language\"",
    "Walter Mitty was truly living his best life skateboarding down those hills",
    "🇮🇸"
)
const icelandicAudio = new Audio('../audio-clips/icelandic-audio.mp3')

// ~ Arrays for all audios and all phrases: ~ //

const allAudios = [spanishAudio, frenchAudio, germanAudio, koreanAudio, japaneseAudio, hindiAudio, swedishAudio, chineseAudio, russianAudio, icelandicAudio]

const allPhrases = [spanish, french, german, korean, japanese, hindi, swedish, chinese, russian, icelandic]

// ===== DOM CONTENT LOADED ===== //
document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded")

// ===== INSTRUCTIONS FUNCTION ===== //

// Clears main screen and shows instructions and graphic:
const instructionFunction = function () {
    console.log('instruction function invoked')
    welcomeWords.innerText = `Here's how to play:`
    langStats.style.display = 'block'
    instructionsBox.style.display = 'block'
    main.style.backgroundImage = 'none'
    instructionsBox.innerText = "There are over 7,000 languages spoken around the globe! Think you could identify some of them? You'll be given phrases from random languages and it's up to you to identify them to earn points. You will also be given a hint about each language to help you in your identification. When a phrase appears, click on the 👂🏼 to hear the audio. Then type in your best guess and click 'Submit'. If you guess correctly, you'll earn 1 point. Make sure to think fast, you only have 60 seconds on the clock! Press 'Play' to start!"
}

// Instructions button clicked:
instructionsBtn.addEventListener('click', () => {
    // Instructions appear:
        instructionFunction () 
})

// ===== TIMER FUNCTION ===== //

let timer = null


const gameTimer = function () {
    console.log('timer tick tock')
    if(timer === null) {
        timer = 90
    }
    welcomeWords.innerText = `Timer: ${timer}`
    timer--
    if (timer < 0) {
        nextBtn.style.display = 'none'
        playBoxes.style.display = 'none'
        inputBox.style.display = 'none'
        submitBtn.style.display = 'none'
        resultText.style.display = 'block'
        resultText.innerText = `Time's up! Your final score is ${Phrase.score}/10 points. Awesome job!`
        clearInterval(timerInterval)
        // console.log(timerInterval)
    }
}

let timerInterval

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
 
     // input and submit appears
     inputBox.style.display = 'block';
     submitBtn.style.display = 'block';
     restartBtn.style.display = 'block';
}

// ~ CHECK GUESS ON SUBMIT BUTTON ~ //

let phraseIndex = 0

submitBtn.addEventListener('click', () => {
    console.log('submit button clicked')
    allPhrases[phraseIndex].checkGuess()
    nextBtn.style.display = 'block'
    score.innerText = `Score: ${Phrase.score}`
})

// ~ BACKGROUND MUSIC ~ //
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

// ~ PLAY PHRASE AUDIO CLIPS ~ //
phraseAudio.addEventListener('click', () => {
    allAudios[phraseIndex].play()
})

// ~ GO TO NEXT PHRASE ON NEXT BUTTON ~ //
nextBtn.addEventListener('click', () => {
    console.log('next button clicked')
    console.log(phraseIndex)
    inputBox.innerText = ''
    if (phraseIndex === 9) {
    clearInterval(timerInterval)
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
    backgroundMusic = new sound('../audio-clips/acoustic-vibe-124586.mp3')
    backgroundMusic.play();
    main.style.backgroundColor = 'var(--oxford-blue)';
    langStats.style.display = 'none'
    startGame()
    if (phraseIndex === 0) {
        console.log('play button invoked')
        allPhrases[phraseIndex].render()
    }
    timerInterval = setInterval(gameTimer, 1000)
})

// ===== RESTART BUTTON ===== //
restartBtn.addEventListener('click', () => {
    backgroundMusic.stop();
    clearInterval(timerInterval)
    timer = null;
    phraseIndex = 0
    Phrase.score = 0
    score.innerText = 'Score:'
    console.log(phraseIndex)
    console.log(Phrase.score)
    playBoxes.style.display = 'none'
    resultText.style.display = 'none'
    main.style.backgroundImage = "url('../images/welcome-diff-langs.jpeg')";
    main.style.backgroundColor = 'black';
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