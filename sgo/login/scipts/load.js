const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

function isInRange(value, min, max) {
    return value >= min && value <= max;
}

const date = new Date();
const time = date.getHours();

document.addEventListener("DOMContentLoaded", () => {
    const number = generateRandomNumber(0, 7);
    const chance1 = generateRandomNumber(0, 1);
    const chance2 = generateRandomNumber(0, 1);

    const greetings = {
        morning: [
            "Доброе утро! Удачного дня!",
            "С добрым утром! Уже настроился?",
            "Привет! Вперёд к успеху!",
            "Уже проснулся?",
            "Настройся на успех!",
            "Сегодня вас ждут новые возможности!",
            "Давно пора взяться за голову!"
        ],
        daytime: [
            "Настройся и продолжай!",
            "Сервера шепчут на ушко...",
            "Приключения начинаются с клика?",
            "Кажется, пора на пенсию",
            "Ты замечаешь эту табличку?",
            "Маленькие шаги ведут к успехам...",
            "Каждый вход — это волнение или радость."
        ],
        evening: [
            "Утро вечера мудренее",
            "Каждый шаг — к открытиям!",
            "Яркие впечатления впереди!",
            "Тебя ждет нечто особенное!",
            "Не забывай о своих мечтах!",
            "Нечто удивительное впереди!",
            "Раскрой истину!",
        ],
        secrets: [
            "Тень от руин нависает над вами, наполняя вас решимостью",
            "Если соблюдаешь мелкие правила, можно нарушать большие",
            "Гордые люди сами выкармливают свои злые печали",
            "Победить этот мир можно только неслыханной наглостью",
            "Чтобы дойти до цели, человеку нужно только одно – идти",
            "Порой лучше оставить все как есть, пускай горе идет как идет",
            "Жить вместе людям мешает их глупость, а вовсе не различия..."
        ]
    }


    if (chance1 === chance2) {
        document.querySelector(".welcome").innerHTML = greetings.secrets[number]
    } else if (isInRange(time, 6, 12)) {
        document.querySelector(".welcome").innerHTML = greetings.morning[number]
    } else if (isInRange(time, 13, 18)) {
        document.querySelector(".welcome").innerHTML = greetings.daytime[number]
    } else if (isInRange(time, 5, 19)) {
        document.querySelector(".welcome").innerHTML = greetings.evening[number]
    }
})
