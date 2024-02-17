const skeleton = document.querySelector('.skeleton')
const cacto = document.querySelector('.cacto')

const jump = () => {
    skeleton.classList.add('jump');

    setTimeout(() => {
        skeleton.classList.remove('jump');
    }, 700);
}

const loop = setInterval(() => {

const cactoPosition = cacto.offsetLeft;
const skeletonPosition = +window.getComputedStyle(skeleton).bottom.replace('px', '')

if (cactoPosition <= 59 && skeletonPosition < 80 && cactoPosition > 0) {
  
    cacto.style.animation = 'none';
    cacto.style.left = `${cactoPosition}px`

    skeleton.style.animation = 'none';
    skeleton.style.bottom = `-15px`

    skeleton.src = 'death.png'

    clearInterval(loop);
}

}, 10)
document.addEventListener('keydown', jump)
