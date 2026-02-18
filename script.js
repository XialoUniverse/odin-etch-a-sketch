let container = document.querySelector('.container');

function resetCanvas(size) {
    container.innerHTML = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${480 / size}px`;
            square.style.width = `${480 / size}px`;
            square.addEventListener('mouseover', (event) => {
                square.classList.remove('square');
                square.classList.add('activated-square');
            })
            container.appendChild(square);
        }
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    let size = parseInt(prompt('Enter new canvas size: '));
    resetCanvas(size);
})

resetCanvas(16);