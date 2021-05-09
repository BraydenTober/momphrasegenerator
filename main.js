let MainDiv = document.getElementById("main");
let button = document.getElementById("button");
let output = document.getElementById("output");

let Phrases = [
    "I don't rememb-ah.",
    "Don't judge me.",
    "You're in the RED zone.",
    "One more one more one more!",
    "Did you bring me a coffee?",
    "I don't like that!",
    "BEEP BEEP",
    "I want to to watch the news at 5.",
    "DAAAD COME UPSTAIRS",
    "Did you wash your face?",
    "I love my chocolate trail mix.",
    "I make the best pork ever!",
    "I forget to get the alfredo ingredients ...",
    "Mama nono",
    "*throws snowball during episode*",
    "Lets make MORE stirfry vegetables!!!",
    "*inanimate pilates movements*",
    "Did ya miss me??",
    "mama gotta goto bed now",
    "sleepy time",
    "LETS GO SHOPPING!!!"
];
function GenerateRandom() {
    let randPhrase = Math.floor(Math.random() * Phrases.length);
    output.innerHTML = '"' + Phrases[randPhrase] + '"';
}


button.addEventListener("click", GenerateRandom);