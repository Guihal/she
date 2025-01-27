// исправление бага с добавлением не того цвета в корзину
export function clickOnColor(data) {
    const inputs = document.querySelectorAll('.t-product__option-input_color')

    for (let i = 0; i < inputs.length; i++) {
        let pass = false

        for (let j = 0; j < data.length; j++) {
            if (data[j].color === inputs[i].value) pass = true
        }

        if (pass) continue

        inputs[i].parentNode.click()
        return
    }
}
