const input = document.getElementById('input');
const speed = document.getElementById('speed');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');


playBtn.addEventListener('click', () => {
    playText(input.value);
});

pauseBtn.addEventListener('click', pauseText);

stopBtn.addEventListener('click', stopText);

function playText(input) {
       if(speechSynthesis.paused) { 
        return speechSynthesis.resume();
    };
    const sayInput = new SpeechSynthesisUtterance(input);
    sayInput.rate = speed.value || 1;

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

