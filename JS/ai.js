
document.getElementById('convert-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value;
    if (text.trim() !== '') {
        // تحويل النص إلى كلام
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; // تحديد اللغة إلى العربية
        speechSynthesis.speak(utterance);

        // تمكين زر التحميل
        document.getElementById('download-btn').disabled = false;
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    const text = document.getElementById('text-to-convert').value;
    if (text.trim() !== '') {
        // إنشاء ملف صوتي
        const blob = new Blob([text], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);

        // تشغيل الصوت
        const audio = document.getElementById('audio');
        audio.src = url;
        audio.play();

        // إلغاء الرابط بعد انتهاء تشغيل الصوت
        audio.onended = () => {
            URL.revokeObjectURL(url);
        };
    }
});
