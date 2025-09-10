

const fortuneCookie = document.getElementById("fortune-cookie");
const fortuneText = document.getElementById("fortune");
const backgroundMusic = document.getElementById("background-music");

const fortunes = [
  "uhhhhhhh",
  "...",
  "ummm",
  "so",
  "hi rei",
  "...",
  "i know that",
  "u might still be",
  "a little upset with me",
  "since i told u kanina",
  "that we'd play hiking",
  "but instead i just did sdf",
  "and di man lang nag aya",
  "which is",
  "very wrong sakin",
  "-",
  "also",
  "sorry for making you wait",
  "for so many hours",
  "and to think na",
  "di man lang ako nag message",
  "to ask if u wanted to play with me.",
  "i really thought na you",
  "were busy studying pa",
  "and i dont want to disturb you",
  "so that after mo nyan",
  "makapag play na tayo the rest of the night",
  "i also waited for you",
  "for real",
  "but still",
  "mali ko talaga yon",
  "and i admit it",
  "...",
  "please let me make bawii",
  "okay?",
  "-",
  "i hope we can be okay again",
  "because honestly",
  "playing with you",
  "is always so fun",
  "-",
  "if ayaw mo talaga",
  "mag cry nalang ako here",
  "-",
  "pero BFF!",
  "take your time",
  "i know na mad kapa sakin",
  "just so u know na",
  "i'll wait for you",
  "if when mo na gusto",
  "makipag play sakin",
  "okay?",
  "",
  "na miss kita legit",
  "...",
  "wag mo kong e barang",
  "...",
  "- shuji"
];

let currentFortuneIndex = 0;
let isMusicPlaying = false; 

fortuneCookie.addEventListener("click", () => {
  fortuneText.textContent = fortunes[currentFortuneIndex];
  fortuneText.style.opacity = 1;


  if (currentFortuneIndex < fortunes.length - 1) {
    currentFortuneIndex++;
  }

  fortuneCookie.style.transform = "scale(0.9)";
  setTimeout(() => {
    fortuneCookie.style.transform = "scale(1)";
  }, 150);

  if (!isMusicPlaying) {
    backgroundMusic.play();
    isMusicPlaying = true;
  }
});
