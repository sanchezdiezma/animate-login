const monster = document.getElementById('monster');
const user = document.getElementById('input-user');
const password = document.getElementById('input-password');
const body = document.querySelector('body');

const midleWidth = window.innerWidth/2;
const midleHeight = window.innerHeight/2;

let seguirPunteroMouse = true;

body.addEventListener('mousemove', (m) => {

    if (seguirPunteroMouse) {
        
        if (m.clientX < midleWidth && m.clientY < midleHeight) {
            monster.src = './img/idle/2.png'
        } else if (m.clientX < midleWidth && m.clientY > midleHeight) {
            monster.src = './img/idle/3.png'

        } else if (m.clientX > midleWidth && m.clientY < midleHeight) {
            monster.src = './img/idle/5.png'
        } else {
            monster.src = './img/idle/4.png'
        }
    }
})
    

user.addEventListener('focus',() => {
    seguirPunteroMouse = false;
})

user.addEventListener('blur', () => {
    seguirPunteroMouse = true;
})

user.addEventListener('keyup', () => {
    let userValue = user.value.length;
    console.log(user.value.length);

    if (userValue >= 0 && userValue <= 5) {
        monster.src = 'img/read/1.png'
    } else if (userValue >= 6 && userValue <=14 ) {
        monster.src = 'img/read/2.png'
    } else if (userValue >= 15 && userValue <= 20) {
        monster.src = 'img/read/3.png'
    } else {
        monster.src = 'img/read/4.png'
    }
})

password.addEventListener('focus', () => {
    seguirPunteroMouse = false;
    let cont = 1;
    const cubrirOjo = setInterval(() => {
        monster.src = 'img/cover/' + cont + '.png';
        if (cont < 8) {
            cont++;
        } else {
            clearInterval(cubrirOjo);
        }
    }, 60);
})

password.addEventListener('blur', () => {
    seguirPunteroMouse = true;
    let cont = 7;
    const descubrirOjo = setInterval(() => {
        monster.src = 'img/cover/' + cont + '.png';
        if (cont > 1) {
            cont--;
        } else {
            clearInterval(descubrirOjo);
        }
    }, 60);
})


