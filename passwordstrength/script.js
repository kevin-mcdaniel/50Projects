const bgImage = document.getElementById('background');
const pw = document.getElementById('password');


pw.addEventListener('input', e => {
    const initialBlur = 20;
    const inputLength = e.target.value.length
    const currentBlur = initialBlur - inputLength * 2;
    bgImage.style.filter = `blur(${currentBlur}px)`;
})
