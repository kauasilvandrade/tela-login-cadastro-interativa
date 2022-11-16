const conteudoContainer = document.querySelector('.conteudo');

function mover() {

    conteudoContainer.classList.toggle('mover')

}

document.querySelector('.openLoginMobile').addEventListener('click', mover);
document.querySelector('.openRegisterMobile').addEventListener('click', mover);

document.getElementById('openRegister').addEventListener('click', mover);
document.getElementById('openLogin').addEventListener('click', mover);