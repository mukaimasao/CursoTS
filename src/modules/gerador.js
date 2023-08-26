const rand = (min, max) => Math.floor(Math.random() * (max -min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula= () => String.fromCharCode(rand(97,123));
const geraNumero= () => String.fromCharCode(rand(47,58));
const simbolo = ',.;^~[]{}!@#$%¨&*()_-=+§/?°|+';
const geraSimbolo = () => simbolo[rand(0,simbolo.length)];

export default function geraSenha(qtd, mai, min, num, sim){
    const senhaArray = [];
    qtd = Number(qtd);
    for(let i = 0; i < qtd; i++){
        mai && senhaArray.push(geraMaiuscula());
        min && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNumero());
        sim && senhaArray.push(geraSimbolo());
    }
     return senhaArray.join('').slice(0, qtd);
}