let RandomResult;
let ButtonPlaySound = document.getElementById("TheMagicConchShell");
let AudioPlayer = new Audio();

AudioPlayer.addEventListener("ended", function () {
  AudioPlayer.currentTime = 0;
  IsButtonEnabled(true);
  console.log(`The magic conch has spoken, All hail the magic conch!`);
});

const SoundsUri = [
  "/resources/audio/Yes.ogg",
  "/resources/audio/No.ogg",
  "/resources/audio/No2.ogg",
  "/resources/audio/IDontThinkSo.ogg",
  "/resources/audio/Neither.ogg",
  "/resources/audio/Nothing.ogg",
  "/resources/audio/TryAskingAgain.ogg",
];


function AskTheMagicShell() {
  AudioPlayer.src = SoundsUri[Math.floor(Math.random() * SoundsUri.length)]
  IsButtonEnabled(false);
  AudioPlayer.play();
}

function IsButtonEnabled(state) {
  ButtonPlaySound.style.pointerEvents = state ? "auto" : "none";
  ButtonPlaySound.style.cursor = state ? "pointer" : "default";
}
