let text = document.getElementById("txt");
let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMessage;

submitBtn.addEventListener("click", () => {
    if ("speechSynthesis" in window) {
        if (!audioMessage) {
            audioMessage = new SpeechSynthesisUtterance();
            audioMessage.lang = 'ar-SA'; // تحديد اللغة إلى العربية
        }

        // تحديد النص للكلام
        audioMessage.text = text.value;

        // تشغيل النص ككلام
        window.speechSynthesis.speak(audioMessage);

        // إظهار أزرار الاستئناف والإيقاف المؤقت
        pauseBtn.style.display = "block";
        resumeBtn.style.display = "none";
    } else {
        alert("Speech Synthesis غير مدعوم في هذا المتصفح");
    }
});

resumeBtn.addEventListener("click", () => {
    // استئناف النص إذا كان متوقفًا مؤقتًا
    if (speechSynthesis.paused) {
        speechSynthesis.resume();
    }
});

pauseBtn.addEventListener("click", () => {
    // إيقاف مؤقت للنص إذا كان قيد التشغيل
    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
    }

    // إظهار أزرار الاستئناف والإيقاف المؤقت
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
});