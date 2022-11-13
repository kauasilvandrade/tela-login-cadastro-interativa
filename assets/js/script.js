
// FUNCÃO PARA MOVER NO CELULAR O LOGIN E CRIAR CONTA
const btnMoverBloco = document.querySelectorAll('.btnMover')

function Mover() {

    // CELULAR
    const login = document.querySelector('.conteudo__login');
    login.classList.toggle('mover');

    const criarConta = document.querySelector('.conteudo__criarConta');
    criarConta.classList.toggle('mover');

    // DESKTOP
    const legendaLogin = document.querySelector('.conteudo__LegendaLogin');
    legendaLogin.classList.toggle('mover');

    const legendaCriarConta = document.querySelector('.conteudo__LegendaCriarConta');
    legendaCriarConta.classList.toggle('mover');
}

btnMoverBloco.forEach((btnMover =>
    btnMover.addEventListener('click', Mover)
))