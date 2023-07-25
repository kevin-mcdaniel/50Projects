const elLabels = document.querySelectorAll('.form-control label');

elLabels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 20}ms">${letter}</span>`)
    .join('');
})
