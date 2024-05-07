// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const button = document.querySelector('button');
    const text = document.getElementById('text-to-speak');
    const voices = document.getElementById('voice-select');
    const image = document.querySelector('img');
    const synth = document.speechSynthesis;
    let voiceList;

    speechSynthesis.addEventListener('voiceschanged', () => {
      voiceList = speechSynthesis.getVoices();

      for (let i = 0; i < voiceList.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;

        if (voiceList[i].default) {
          option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voiceList[i].lang);
        option.setAttribute("data-name", voiceList[i].name);
        voices.appendChild(option);
      }
    });
    
    button.addEventListener('click', () => {
        const speech = new SpeechSynthesisUtterance(text.value);
        const selectedOption = voices.selectedOptions[0].getAttribute("data-name");
        for (let i = 0; i < voiceList.length; i++) {
          if (voiceList[i].name === selectedOption) {
            speech.voice = voiceList[i];
          }
        }
        speechSynthesis.speak(speech);

        image.src = `assets/images/smiling-open.png`;
          speech.onend = () => {
            image.src = `assets/images/smiling.png`;
          };
    });   
}