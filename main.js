import { creditCards } from "./cardNumbers.js"

const cardRegex = [
    {
        regex: /^4\d{15}$/,
        name: "Visa"
    },

    {
        regex: /^(5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/,
        name: "Mastercard"
    },

    {
        regex: /^3[47]\d{13}$/,
        name: "American Express"
    },

    {
        regex: /^6(011|5\d{2})\d{12}$/,
        name: "Discover"
    },

    {
        regex: /^3(0[0-5]|[68]\d)\d{11}$/,
        name: "Diners Club"
    },

    {
        regex: /^(2131|1800|35\d{3})\d{11}$/,
        name: "JCB"
    }
]

function cardValidation(numberList) {

    const validCard = []

    for (let i in cardRegex) {

        for (let number in numberList) {

            if (cardRegex[i].regex.test(numberList[number])) {

                validCard.push({
                    id: number,
                    number: numberList[number],
                    flag: cardRegex[i].name
                })

            }
        }
    }

    return validCard
}

console.log(cardValidation(creditCards))