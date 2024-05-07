// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  const volumeControls = document.getElementById('volume');
  const volumeImage = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti()

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    audio.src = `assets/audio/${horn}.mp3`;
    image.src = `assets/images/${horn}.svg`;
  });

  volumeControls.addEventListener('input', () => {
    let vol = volumeControls.value;
    audio.volume = vol / 100;
    if (vol == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiRadius: 6,
        confettiNumber: 250,
      });
    }
  });
}