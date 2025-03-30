document.addEventListener("DOMContentLoaded", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
        document.getElementById("output").innerText = event.results[0][0].transcript;
    };
    
    document.getElementById("start-record").addEventListener("click", () => {
        recognition.start();
    });

    document.getElementById("speak").addEventListener("click", () => {
        const text = document.getElementById("text-to-speak").value;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    });
});
