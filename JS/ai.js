const textToConvertInput = document.getElementById('text-to-convert');
const convertBtn = document.getElementById('convert-btn');
const downloadBtn = document.getElementById('download-btn');
const audioElement = document.getElementById('audio');

convertBtn.addEventListener('click', () => {
    const text = textToConvertInput.value.trim();
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; 

        
        speechSynthesis.speak(utterance);

        
        downloadBtn.disabled = false;
    }
});

downloadBtn.addEventListener('click', () => {
    const text = textToConvertInput.value.trim();
    if (text !== '') {
        const blob = new Blob([text], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);

        audioElement.src = url;
        audioElement.play();

        
        audioElement.onended = () => {
            URL.revokeObjectURL(url);
        };
    }
});