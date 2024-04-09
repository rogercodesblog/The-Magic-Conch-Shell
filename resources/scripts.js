let RandomResult;
let ButtonPlaySound = document.getElementById("TheMagicConchShell");
let AudioPlayer = new Audio();

AudioPlayer.addEventListener("ended", function () {
  AudioPlayer.currentTime = 0;
  IsButtonEnabled(true);
  console.log(`The magic conch has spoken, All hail the magic conch!`);
});

const SoundsUri = [
  "/resources/audio/english/Yes.ogg",
  "/resources/audio/english/No.ogg",
  "/resources/audio/english/No2.ogg",
  "/resources/audio/english/IDontThinkSo.ogg",
  "/resources/audio/english/Neither.ogg",
  "/resources/audio/english/Nothing.ogg",
  "/resources/audio/english/TryAskingAgain.ogg",
];


function AskTheMagicShell() {
  AudioPlayer.src = SoundsUri[Math.floor(Math.random() * 7)];
  IsButtonEnabled(false);
  AudioPlayer.play();
}

function IsButtonEnabled(state) {
  ButtonPlaySound.style.pointerEvents = state ? "auto" : "none";
  ButtonPlaySound.style.cursor = state ? "pointer" : "default";
}
