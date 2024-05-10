
document.getElementById('convert-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value;
    if (text.trim() !== '') {
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; 
        speechSynthesis.speak(utterance);

        
        document.getElementById('download-btn').disabled = false;
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value;
    if (text.trim() !== '') {
        
        const blob = new Blob([text], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);

        
        const audio = document.getElementById('audio');
        audio.src = url;
        audio.play();

        
        audio.onended = () => {
            URL.revokeObjectURL(url);
        };
    }
});
