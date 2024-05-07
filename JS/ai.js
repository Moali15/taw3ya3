
document.getElementById('convert-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value;
    if (text.trim() !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';

        // Speech synthesis callback
        utterance.onend = () => {
            const blob = new Blob([new Uint8Array(0)], { type: 'audio/mpeg' });
            const url = URL.createObjectURL(blob);
            const audio = document.getElementById('audio');
            audio.src = url;
            audio.play();
        };

        speechSynthesis.speak(utterance);
    }
});