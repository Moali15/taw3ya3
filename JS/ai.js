
document.getElementById('convert-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value.trim();
    if (text !== '') {
        // تحويل النص إلى كلام
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; // تحديد اللغة إلى العربية

        // تشغيل الكلام
        speechSynthesis.speak(utterance);

        // تمكين زر التحميل بعد انتهاء الكلام
        utterance.onend = () => {
            document.getElementById('download-btn').disabled = false;
        };
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value.trim();
    if (text !== '') {
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; 

        
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