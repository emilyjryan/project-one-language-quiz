# language-quiz-game

## Elevator pitch:

"There are over 7,000 languages spoken around the globe. Think you could identify some of them? Test your knowledge of different languages using this fun game! You'll be given phrases from random languages and it's up to you to identify them to earn points. Learn as you go with English translations given for each phrase. Play against yourself to beat your high score!"

## About the Game:

This game will involve one phrase at a time popping up on the canvas screen. The player will need to type in the correct language to earn one point. If they are incorrect, they do not receive a point. There will be 10 phrases. Score will be number correct out of 10.

## Tech stack used:

- Html (Canvas)
- CSS
- Javascript

## Wireframe:
<!-- local image -->
![Wireframe](./images/wireframe1201.png)

## MVP Goals:
- Render the starting screen with canvas, instruction button, and start button
- On 'instructions' click, render instruction page with directions in the canvas
- on 'play' click, render new canvas with 'guess' button
- Render 1 phrase at a time to appear on the screen, from a fixed list of 10 phrases, with the English translation below
- Render a free type input bar with a submit button for user to type in a language and submit their guess.
- User types in correct language that matches phrase --> render 'correct' screen and add 1 point, render 'next' button
- User clicks incorrect language --> render 'unlucky' screen and show current score, render 'next' button
- Game ends after the 10 phrases have been clicked through
- End screen rendered with ending score, and two buttons for 'try again' and 'instructions'


## Stretch Goals:
- Three language options appear with each new phrase for the user to guess from, one is correct and the other two are randomly generated.
- Add more phrases and incorporate a timer to see how many points a player can get within a specific timeframe
- Keep track of high scores so player can play against his best score
- Each phrases will be floating down slowly in the canvas and player must type in language before they reach the bottom edge, or else it counts as a loss.
- Difficulty levels depending on the phrases, with easy, medium, and hard
- Include a @media query for mobile devices and smaller screens

## Potential roadblocks:
- Difficulty linking the language phrase with the correct button
- If going for challenge, difficulty using fetch to generate random phrases with language key value attached
