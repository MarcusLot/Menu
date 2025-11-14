// URL para o QR Code
const url = 'https://menucasaflo-g8cj8hjf.manus.space';

// Tamanho do QR Code (em pixels)
const qrSize = 300;

// Criar o QR Code
document.addEventListener('DOMContentLoaded', function() {
    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: qrSize,
        height: qrSize,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});
