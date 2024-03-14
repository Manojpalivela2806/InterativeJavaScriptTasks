document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.querySelector('.range input[type="range"]');
    const rangeValue = document.querySelector('.range span');
    const generateButton = document.querySelector('.generate button');
    const passwordField = document.querySelector('.password input[type="text"]');
    const copyButton = document.querySelector('.password button');

    rangeInput.addEventListener("input", function () {
        rangeValue.textContent = this.value;
    });

    generateButton.addEventListener("click", function () {
        const lowercase = document.getElementById("lowercase").checked;
        const uppercase = document.getElementById("uppercase").checked;
        const digits = document.getElementById("digits").checked;
        const special = document.getElementById("special").checked;
        const length = rangeInput.value;

        let charset = "";
        if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (digits) charset += "0123456789";
        if (special) charset += "!@₹#$%&*";

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        passwordField.value = password;
    });

    copyButton.addEventListener("click", function () {
        passwordField.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    });
});