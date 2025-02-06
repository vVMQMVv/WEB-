const messages = [
    "อ้วนๆแน่ใจหรอ",
    "เอาจริงดิอ้วน",
    "ไม่รักเค้าแล้วหรอ",
    "แงงงงงงงง",
    "เค้าให้อ้วนคิดอีกรอบบบ",
    "ถ้าอ้วนไม่รักเค้าคงเศร้ามากๆแน่เลย",
    "เค้าเสียใจมากกกกกกกกกกก",
    "อ้วนไม่รักเค้าแล้วอะ",
    "เค้าจะไม่ถามอ้วนแล้ว",
    "หยอกเล่นนนนนนนน❤️",
    "อย่าดื้อ",
    "อย่าดื้อ!",
    "อย่าดื้อ!!",
    "อย่าดื้อ!!!",
    "อย่าดื้อ!!!!",
    "อย่าดื้อ!!!!!",
    "อย่าดื้อ!!!!!!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}