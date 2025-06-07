import { clickOnActiveColor } from './clickOnActiveColor'
import { clickOnColor } from './clickOnColor'
import { formatSelector } from './formatSelector'
import { getColorLinks } from './getColorLinks'

export async function redirectOnClickColor() {
    const data = await getColorLinks()
    if (data.length === 0) return

    window.colorData = data

    window.addEventListener('load', () => {
        clickOnColor(data)
    })

    const selector = formatSelector(data)

    document.addEventListener('click', (ev) => {
        if (!ev.isTrusted) return

        const block = ev.target.closest('.t-product__option-item_color')
        if (!block) return

        const colorBlock = block.querySelector(selector)
        if (!colorBlock) return

        console.log(colorBlock)
        for (let i = 0; i < data.length; i++) {
            if (data[i].color === colorBlock.value) {
                window.location.href = data[i].link
            }
        }
    })
}
