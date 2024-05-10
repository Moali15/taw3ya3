// Get DOM elements
const textInput = document.getElementById('text-to-speak');
const languageSelect = document.getElementById('language-select');
const speakButton = document.getElementById('speak-btn');
const stopButton = document.getElementById('stop-btn');

// Initialize SpeechSynthesisUtterance
let utterance = new SpeechSynthesisUtterance();

// Event listener for Speak button
speakButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    const selectedLanguage = languageSelect.value;

    if (text !== '') {
        // Set the text to be spoken
        utterance.text = text;
        
        // Set the language
        utterance.lang = selectedLanguage;

        // Speak the text
        window.speechSynthesis.speak(utterance);
    }
});

// Event listener for Stop button
stopButton.addEventListener('click', () => {
    // Stop speaking
    window.speechSynthesis.cancel();
});
