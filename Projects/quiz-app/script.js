const quizData = [
    {
        question: " De quem é a famosa frase “Penso, logo existo”?",
        a: "Platão",
        b: "Galileu Galilei",
        c: "Descartes",
        d: "Sócrates",
        correct: "c"
    }, {
        question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
        a: "113",
        b: "109",
        c: "108",
        d: "118",
        correct: "d"
    }, {
        question: " Quanto tempo a luz do Sol demora para chegar à Terra",
        a: "12 minutos",
        b: "1 dia",
        c: "12 horas",
        d: "8 min",
        correct: "d"
    }, {
        question: "Em que período da pré-história o fogo foi descoberto?",
        a: "Neolítico",
        b: "Paleolítico",
        c: "Idade dos Metais",
        d: "Período da Pedra Polida",
        correct: "b"
    }, {
        question: "Qual a velocidade da luz?",
        a: "300 000 000 metros por segundo (m/s)",
        b: "150 000 000 metros por segundo (m/s)",
        c: "199 792 458 metros por segundo (m/s)",
        d: "299 792 458 metros por segundo (m/s)",
        correct: "d"
    }
    
    
]

const questionEl= document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    


}

submitBtn.addEventListener('click', () => {
    currentQuestion++
    
    if(currentQuestion <quizData.length) {
        loadQuiz();
    } else {
        alert("show results");
    }


})