let container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', (event) => {
            square.classList.remove('square');
            square.classList.add('activated-square');
        })
        container.appendChild(square);
    }
}