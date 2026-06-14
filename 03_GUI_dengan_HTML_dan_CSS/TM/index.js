const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => {
    const textLength = event.target.value.length;
    charCountElement.textContent = textLength;

    let uppercaseCount = 0;
    let lowercaseCount = 0;

    for (let i = 0; i < event.target.value.length; i++) {
        const char = event.target.value[i];
        if (char >= 'A' && char <= 'Z') {
            uppercaseCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowercaseCount++;
        }
    }

    uppercaseCountElement.textContent = uppercaseCount;
    lowercaseCountElement.textContent = lowercaseCount;
});

uppercaseCountElement.addEventListener("click", function() {
    alert("Jumlah huruf besar: " + uppercaseCountElement.textContent);
});

lowercaseCountElement.addEventListener("click", function() {
    alert("Jumlah huruf kecil: " + lowercaseCountElement.textContent);
});

btnParagraph.addEventListener("click", function() {
    let text = editorElement.value.toLowerCase();
    if (text.length > 0) {
        text = text.charAt(0).toUpperCase() + text.slice(1);
        editorElement.value = text;
    }
});