const MoverCriarConta = document.getElementById('register');
const MoverLogin = document.getElementById('login');

function moverLoginCriarConta() {

    const criarConta = document.querySelector('.conteudo__criarConta');
    criarConta.classList.toggle('mover');

    const login = document.querySelector('.conteudo__login');
    login.classList.toggle('mover');

}

MoverCriarConta.addEventListener('click', moverLoginCriarConta);

MoverLogin.addEventListener('click', moverLoginCriarConta);