
//Переменные для крестиков ноликов
let cells = document.querySelectorAll("#table td");
let divTictak = document.getElementById('tic-tak-answer');
let ticTak = document.getElementById('tic-tak');
let startTicTak = document.getElementById('start-tic-tak');


//Переменная для старта игры
const startBtn = document.getElementById('start-button');

//Переменные для 1 этапа 
const firstStage = document.getElementById('first-stage');
const img1 = document.getElementById('img1-first-stage');
const img2 = document.getElementById('img2-first-stage');
const img3 = document.getElementById('img3-first-stage');
const answer = document.getElementById('answer-first-stage')

//Переменные для 2 этапа 
const secondStage = document.getElementById('second-stage')
const inputSecondStage = document.getElementById('input-second-stage')
const acceptSecondStage = document.getElementById('accept-second-stage')
const answerSecondStage = document.getElementById('answer-second-stage')

//Переменные для 3 этапа 
const thirdStage = document.getElementById('third-stage')
const hpMonsterThirdStage = document.getElementById('hp-monster-third-stage')
const hpPlayerThirdStage = document.getElementById('hp-player-third-stage')
const attackThirdStage = document.getElementById('attack-third-stage')
const healThirdStage = document.getElementById('heal-third-stage')

//Переменные для 4 этапа
const fourthStage = document.getElementById('fourth-stage')
const trueBthFourthStage = document.getElementById('true-btn')
const answerFourthStage = document.getElementById('answer-fourth-stage')

//Переменные для 5 этапа

const fifthStage = document.getElementById('fifth-stage')
const hpMonsterFifthStage = document.getElementById('hp-monster-fifth-stage')
const hpPlayerFifthStage = document.getElementById('hp-player-fifth-stage')
const attackFifthStage = document.getElementById('attack-fifth-stage')
const healFifthStage = document.getElementById('heal-fifth-stage')
const answerFifthStage = document.getElementById('answer-fifth-stage')
//старт игры

const getStart = () => {
    firstStage.classList.remove('hide');
    firstStage.classList.add('visible-first-stage');
    answer.textContent = "";
    inputSecondStage.value = "";
    answerSecondStage.textContent = "";
}

startBtn.addEventListener('click', getStart);

const nexStage = (arg1,arg2) => {
    arg1.classList.remove(`visible-${arg1.id}`);
    arg1.classList.add("hide");
    arg2.classList.remove('hide');
    arg2.classList.add(`visible-${arg2.id}`)
}

//Этап 1

const trueImg = () => {
    if (img2) {
        answer.textContent = 'Вы угадали дверь, переход на следующий этап...';
        setTimeout(() => {
            nexStage(firstStage,secondStage)
        }, 1000);
    } else {
        answer.textContent = 'Вы не угадали дверь, попробуйте еще раз!'
    }
}

const falseImg = () => {
    if (img1, img3) {
        answer.textContent = 'Вы не угадали дверь, попробуйте еще раз!'
    }
}

img3.addEventListener('click', falseImg)
img2.addEventListener("click", trueImg)
img1.addEventListener('click', falseImg)

//Этап 2
const checkAnswer = () => {
    if (inputSecondStage.value == 6) {
        answerSecondStage.textContent = 'Молодец, этот ответ верный! переход на следующий этап...'
        setTimeout(() => {
            nexStage(secondStage,thirdStage)
        }, 1000);

    } else {
        answerSecondStage.textContent = 'Неверно! попробуй еще раз'
    }
}

acceptSecondStage.addEventListener('click', checkAnswer);

//Этап 3

let hpMonster = 100;
let hpPlayer = 100;

hpMonsterThirdStage.textContent = hpMonster;
hpPlayerThirdStage.textContent = hpPlayer;

const randomDamage = (min, max) => Math.floor(Math.random() * (max - min) + min);

const attack = () => {
    hpMonster -= randomDamage(5, 10);
    hpMonsterThirdStage.textContent = hpMonster;
    if(hpMonster <= 0){
    nexStage(thirdStage, fourthStage)
    }
    hpPlayer -= randomDamage(10, 20);
    hpPlayerThirdStage.textContent = hpPlayer;

};

const getHeal = () => {
    hpPlayer += 10;

    hpPlayerThirdStage.textContent = hpPlayer;
};

attackThirdStage.addEventListener('click', attack)
healThirdStage.addEventListener('click', getHeal)

//Этап 4

const trueBtn = () => {
    if(trueBtn) {
        answerFourthStage.textContent = 'Молодец ты угадал! переход на следующий ход....';
        setTimeout(() => {
            nexStage(fourthStage,fifthStage)

        }, 300);
    } else{
        answerFourthStage.textContent = 'Не угадал, попробуй еще раз!';
    }
}

trueBthFourthStage.addEventListener('click', trueBtn)

//Этап 5 (завершающий)

let hpGLMonster = 1000;
let hpGLPlayer = 800;

hpMonsterFifthStage.textContent = hpGLMonster;
hpPlayerFifthStage.textContent = hpGLPlayer;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const giveattack = () => {
    hpGLMonster -= random(40, 90);
    hpMonsterFifthStage.textContent = hpGLMonster;
    if(hpGLMonster <= 0){
    answerFifthStage.textContent = 'Вы прошли игру! Вы одержали победу над главным монстром'
    }
    hpGLPlayer -= randomDamage(50, 100);
    hpPlayerFifthStage.textContent = hpGLPlayer;
};

const getGLHeal = () => {
    hpGLPlayer += 20;

    hpPlayerFifthStage.textContent = hpGLPlayer;
};


attackFifthStage.addEventListener('click', giveattack)
healFifthStage.addEventListener('click', getGLHeal)

const isVictory = (argCells) => {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    for (let comb of combinations)
        if (
            argCells[comb[0]].textContent === argCells[comb[1]].textContent &&
            argCells[comb[1]].textContent === argCells[comb[2]].textContent &&
            argCells[comb[0]].textContent != ""
        ) {
            return true
        }
    return false
};

const start = (argCells) => {
    let i = 0;


    for (let cell of argCells) {
        cell.addEventListener('click', function turn() {
            cell.textContent = ["X", "0"][i % 2];
            cell.removeEventListener('click', turn);
            if (isVictory(argCells)) {
                setTimeout(() => {
                    divTictak.textContent = `Победил ${cell.textContent}`;
                });
            } else if (i == 8) {
                divTictak.textContent = 'Ничья';
            }
            
            i++;
        });
    }
};



//Старт игры крестики нолики

const goTicTak = () => {
    let arrStage = [firstStage,secondStage,thirdStage,fourthStage,fifthStage]
    arrStage.forEach(el =>{
        if (el.classList != 'hide'){
            el.classList.remove(el.classList);
            el.classList.add('hide')



        }
        ticTak.classList.remove('hide')
        ticTak.classList.add('visible-tic-tak')

        cells.forEach((el) => (el.textContent = ""));
        divTictak.textContent = 'Идет игра...'
        start(cells);
    });
};

startTicTak.addEventListener('click', goTicTak);