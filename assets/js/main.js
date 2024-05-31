const input = $('#input');
const speed = $('#speed');
const playBtn = $('#play');
const pauseBtn = $('#pause');
const stopBtn = $('#stop');
let currentCharacter;

const sayInput = new SpeechSynthesisUtterance();
sayInput.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
});

playBtn.on('click', () => {
    playText(input.val());
    // console.log(input.val())
});
pauseBtn.on('click', pauseText);
stopBtn.on('click', stopText);
speed.on('input', () => {
    stopText()
    playText(sayInput.text.substring(currentCharacter))
});

function playText(input) {
       if(speechSynthesis.paused) { 
        return speechSynthesis.resume();
    };
    sayInput.text = input;
    sayInput.rate = speed.val() || 1;
    speechSynthesis.speak(sayInput);
};

function pauseText() {
      if(speechSynthesis.speaking) {
        speechSynthesis.pause();
    }else{ 
        return
    }
};

function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
};
