# Credit Card Regex

## Visa

### /^4\d{15}$/

A string começa com um 4 e é seguida por 15 dígitos adicionais.

## Mastercard

### /^(5[1-5]\d{2}|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/

Os primeiros números podem começar com 51 a 55, 2221 a 2720 ou 23 a 26, seguidos por 12 dígitos.

## American Express

### /^3[47]\d{13}$/

Os primeiros dígitos são 34 ou 37, seguidos por 13 dígitos adicionais.

## Discover

### /^6(011|5\d{2})\d{12}$/

Os primeiros dígitos são 6011 ou 65, seguidos por 12 dígitos adicionais.

## Diners Club

### /^3(0[0-5]|[68]\d)\d{11}$/

Os primeiros dígitos são 30 a 35 ou 36 a 38, seguidos por 11 dígitos adicionais.

## JCB

### /^(2131|1800|35\d{3})\d{11}$/

Os primeiros dígitos são 2131 ou 1800 ou começam com 35 seguidos por 11 dígitos adicionais.