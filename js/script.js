const skeleton = document.querySelector('.skeleton')
const cacto = document.querySelector('.cacto')
const cloud = document.querySelector('.cloud')
const score = document.querySelector('.score')

const jump = () => {
    skeleton.classList.add('jump');

    setTimeout(() => {
        skeleton.classList.remove('jump');
    }, 700);
}

const loop = setInterval(() => {

const cactoPosition = cacto.offsetLeft;
const cloudPosition = cloud.offsetLeft;
const skeletonPosition = +window.getComputedStyle(skeleton).bottom.replace('px', '')

if (cactoPosition <= 59 && skeletonPosition < 80 && cactoPosition > 0) {
  
    cacto.style.animation = 'none';
    cacto.style.left = `${cactoPosition}px`

    skeleton.style.animation = 'none';
    skeleton.style.bottom = `-15px`

    cloud.style.animation = 'none';
    cloud.style.left = `${cloudPosition}px`

    skeleton.src = 'death.png'

    clearInterval(loop);
}

}, 10)
document.addEventListener('keydown', jump)