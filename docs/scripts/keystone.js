var arcticstar = new Image()
arcticstar.src = "resources/Arctic_Star.jpg"
revealed = [0, 0]

function numToString(num) {
    digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    tens = ["teen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty"]
    hundreds = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"]
    if (num < 10) {
        return digits[num]
    }
    else if (num < 20) {
        if (num == 11) {
            return "eleven"
        }
        else if (num == 12) {
            return "twelve"
        }
        else if (num == 13) {
            return "thirteen"
        }
        else if (num == 15) {
            return "fifteen"
        }
        else {
            return digits[num - 10] + tens[0]
        }
    }
    else if (num < 100) {
        return tens[Math.floor(num / 10) - 1] + " " + digits[num % 10]
    }
    else if (num < 1000) {
        return hundreds[Math.floor(num / 100) - 1] + " " + tens[Math.floor(num / 10) % 10 - 1] + " " + digits[num % 10]
    }
}

function getDimension(idx) {
    if (idx % 2 == 0) {
        return arcticstar.width
    }
    else {
        return arcticstar.height
    }
}

function verify() {
    if (revealed[0] == 1 && revealed[1] == 1)
        return
    key = document.getElementById("key")
    constant = document.getElementById("constant")
    current = document.getElementById("current")
    keyValue = key.value
    if (revealed[0] == 0 && keyValue == getDimension(0)) {
        current.href = numToString(keyValue).replaceAll(' ', '') + ".html"
        current.removeAttribute("hidden")
        revealed[0] = 1
    }
    else if (revealed[1] == 0 && keyValue == getDimension(1)) {
        constant.href = numToString(keyValue).replaceAll(' ', '') + ".html"
        constant.removeAttribute("hidden")
        revealed[1] = 1
    }
    if (revealed[0] == 1 && revealed[1] == 1)
        key.setAttribute("hidden", "hidden")
}