const formulario = document.getElementById('formulario');
const welcome = document.getElementById('welcome');
const logoutBtn = document.getElementById('logout');

/**
 * VERIFICA SE TEM ALGUM USUÁRIO NO MEU LOCALSTORAGE
 * SE TIVER ELE MOSTRA MENSAGEM DE BOAS VINDAS
 * SE NÃO TIVER, ELE MOSTRA A TELA DE LOGIN
 */
function checkUser() {
    const nomeUserLocalStorage = localStorage.getItem("usuario");

    if (nomeUserLocalStorage) {
        formulario.style.display = "none";
        welcome.style.display = "block";
        mostrarUsuario();
    } else {
        formulario.style.display = "block";
        welcome.style.display = "none";
    }    
}

formulario.addEventListener("submit", (e) => {
    /**
     * FUNÇÃO PARA NÃO RECARREGAR A PÁGINA QUANDO UM FORMULÁRIO FOR ENVIADO PELO SUBMIT
     */
    e.preventDefault();

    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');

    if (usuario.value == '' || senha.value == '') {
        alert('Preencha o usuário e senha!')
    } else {
        localStorage.setItem('usuario', usuario.value);
        localStorage.setItem('senha', senha.value);
        usuario.value = "";
        senha.value = "";
        alert("Usuário logado com sucesso!");
    }
    checkUser();
})


function mostrarUsuario() {
    const usuarioLogado = document.getElementById('username');
    usuarioLogado.textContent = `${localStorage.getItem('usuario')}`;
}

function sair() {
    localStorage.clear();
    checkUser();
}

//EXECUTA NO INÍCIO DE MINHA APLICAÇÃO - START
checkUser();
