// audio
let audio = new Audio('audio.mp3');
audio.loop = true;

document.addEventListener('click', () => {
    document.querySelector('.enter').style.opacity = 0;
    document.querySelector('.content').style.opacity = 1;
    audio.play();
});

// flashy text
let texts = ['musician.', 'developer.', 'student.'];
let index = 0;
let textElement = document.getElementById('text');

function changeText() {
    textElement.classList.remove('show');
    setTimeout(() => {
        textElement.textContent = texts[index];
        textElement.classList.add('show');
        index = (index + 1) % texts.length;
    }, 500);
}

setInterval(changeText, 2000);

const text = document.getElementById('animated-text').textContent;
const letters = text.split('');
const html = letters.map(letter => `<span>${letter}</span>`).join('');
document.getElementById('animated-text').innerHTML = html;