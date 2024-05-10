document.getElementById('convert-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value.trim();
    if (text !== '') {
        
        responsiveVoice.speak(text, 'Arabic Male', { rate: 1 });
    }
});