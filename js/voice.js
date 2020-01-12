const synth = window.speechSynthesis;
const text = document.querySelerctor('#text');
const voices = document.querySelector('#voices');

let voiceList = [];
const getVoice = () => {
    voiceList = synth.getVoices();
    voiceList.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name + "("+ voice.lang +")";
    
        option.getAttribute('data.lang', voice.lang);
        option.getAttribute('data.lang', voice.lname);

        voices.appendChild(option);
    });
   
}

getVoice();
if(synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoice;
}
//speak
const speak = () => {
    if(text.value !== "") {
        const speakText = new SpeechSynthesisUtterance(text.value);
        const selectedVoice = voice.selectedOptions[0].getAttribute('data.name');
        voiceList.forEach(voice => {
            if (voice.name === selectedVoice) {
                speakText.voice = voice;
            }
        });
        synth.speak(speakText);
    }
}
const speaks = document.querySelector('button');
speaks.addEventListener('click', speak);