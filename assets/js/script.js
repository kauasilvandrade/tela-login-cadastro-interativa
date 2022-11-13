
// FUNCÃO PARA MOVER NO CELULAR O LOGIN E CRIAR CONTA
const btnMoverBloco = document.querySelectorAll('.btnMover')

function Mover() {

    const login = document.querySelector('.conteudo__login');
    login.classList.toggle('moverMobile');
    login.classList.toggle('moverDesktop');

    const criarConta = document.querySelector('.conteudo__criarConta');
    criarConta.classList.toggle('moverMobile');
    criarConta.classList.toggle('moverDesktop');
}

btnMoverBloco.forEach((btnMover =>
    btnMover.addEventListener('click', Mover)
))