import geraSenha from './gerador';

const senhaGerada = document.querySelector('.senha-gerada');
const qtd = document.querySelector('.qtd-caracteres');
const chkMai = document.querySelector('.chk-maiusculas');
const chkMin = document.querySelector('.chk-minusculas');
const chkNum = document.querySelector('.chk-numeros');
const chkSim = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () =>{
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
}

function gera(){
    const senha = geraSenha(
        qtd.value,
        chkMai.checked,
        chkMin.checked,
        chkNum.checked,
        chkSim.checked
    );
    return senha || 'Nada Selecionado';
}