//TODO add focus state ripple
const elButtons = document.querySelectorAll('.ripple');


function getInsideCoordinates(globalX, globalY, elementX, elementY ) {
    const xInside = globalX - elementX;
    const yInside = globalY - elementY;
    console.log(`${globalX}, ${globalY}, ${elementX}, ${elementY}`)
    console.log(`${xInside}, ${yInside}`)
    return {xInside, yInside}
}

elButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        const {xInside, yInside} = getInsideCoordinates(x, y, buttonLeft, buttonTop);
        const circle = document.createElement('span');

        circle.classList.add('circle');
        circle.style.cssText = `top:${yInside}px; left:${xInside}px`;
        button.appendChild(circle);

        setTimeout(()=>{circle.remove()}, 500);
        
    })
})