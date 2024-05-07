// Get references to the necessary HTML elements
const textToConvertInput = document.getElementById('text-to-convert');
const convertBtn = document.getElementById('convert-btn');
const downloadBtn = document.getElementById('download-btn');
const audioElement = document.getElementById('audio');

// Event listener for the convert button
convertBtn.addEventListener('click', () => {
    const text = textToConvertInput.value;
    if (text.trim() !== '') {
        // Create a SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(text);
        // Set language to Arabic
        utterance.lang = 'ar-SA';
        // Speak the text
        speechSynthesis.speak(utterance);
        // Enable download button
        downloadBtn.disabled = false;
    }
});

// Event listener for the download button
downloadBtn.addEventListener('click', () => {
    const text = textToConvertInput.value;
    if (text.trim() !== '') {
        // Create a new Blob object containing the text
        const blob = new Blob([text], { type: 'audio/mpeg' });
        // Create a temporary URL for the Blob
        const url = URL.createObjectURL(blob);
        // Set the URL as the audio source
        audioElement.src = url;
        // Automatically start downloading the audio file
        audioElement.play();
        // Revoke the URL after the audio has finished playing
        audioElement.onended = () => {
            URL.revokeObjectURL(url);
        };
    }
});
