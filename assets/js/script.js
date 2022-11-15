const conteudoContainer = document.querySelector('.conteudo');

function Mover() {

    conteudoContainer.classList.toggle('mover')

}

document.querySelector('.openLoginMobile').addEventListener('click', Mover);
document.querySelector('.openRegisterMobile').addEventListener('click', Mover);

document.getElementById('openRegister').addEventListener('click', Mover);
document.getElementById('openLogin').addEventListener('click', Mover);