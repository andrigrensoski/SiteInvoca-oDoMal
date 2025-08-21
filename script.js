const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra um antigo livro empoeirado em um sótão abandonado. Ao abrir, percebe que ele contém rituais sombrios. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Ignorar o livro e sair rapidamente do sótão.",
                afirmacao: "Você evita se envolver com forças sobrenaturais perigosas, preservando sua segurança."
            },
            {
                texto: "Abrir o livro e começar a ler os rituais proibidos.",
                afirmacao: "Sua curiosidade o coloca em contato com forças sombrias que podem mudar seu destino."
            }
        ]
    },
    {
        enunciado: "Durante a leitura, uma entidade sombria começa a se manifestar no ambiente. Como você reage?",
        alternativas: [
            {
                texto: "Tentar comunicar-se com a entidade e descobrir seus objetivos.",
                afirmacao: "Você demonstra coragem e tenta compreender os mistérios do desconhecido, mas corre riscos."
            },
            {
                texto: "Fugir imediatamente, fechando o livro e trancando o sótão.",
                afirmacao: "Você evita o confronto direto com forças que não compreende, mantendo-se protegido."
            }
        ]
    },
    {
        enunciado: "Você descobre que a entidade deseja possuir alguém do mundo real. Qual atitude toma?",
        alternativas: [
            {
                texto: "Realiza um ritual de proteção para impedir a possessão.",
                afirmacao: "Sua ação impede a entidade de causar danos, mostrando prudência e conhecimento."
            },
            {
                texto: "Ignora os avisos e continua explorando os rituais do livro.",
                afirmacao: "Você corre o risco de ser influenciado por forças malignas, aprofundando o contato com o sobrenatural."
            }
        ]
    },
    {
        enunciado: "A entidade oferece um pacto: poder e conhecimento em troca de um sacrifício. O que você faz?",
        alternativas: [
            {
                texto: "Recusa o pacto e destrói o livro.",
                afirmacao: "Sua recusa protege você e outros de consequências terríveis, mantendo sua integridade."
            },
            {
                texto: "Aceita o pacto, buscando o poder oferecido.",
                afirmacao: "Você se torna ligado às forças sombrias, e sua vida nunca mais será a mesma."
            }
        ]
    },
    {
        enunciado: "Após os eventos, você percebe que a presença da entidade ainda assombra sua casa. Qual é sua decisão final?",
        alternativas: [
            {
                texto: "Procurar ajuda de especialistas em ocultismo para banir a entidade.",
                afirmacao: "Você busca uma solução segura e responsável, tentando restaurar a paz em sua vida."
            },
            {
                texto: "Aceitar a presença da entidade e conviver com o sobrenatural.",
                afirmacao: "Você escolhe um caminho perigoso, convivendo com forças que desafiam a realidade e a sanidade."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um futuro sombrio...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
