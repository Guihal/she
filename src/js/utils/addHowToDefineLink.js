import { elementReady } from './elementReady'

export async function addHowToDefineLink() {
    const container = await elementReady('[data-edition-option-id="Размер"] .js-product-edition-option-name')

    container.after(
        Object.assign(document.createElement('div'), {
            className: 'how-to-define',
            innerHTML: `<a href="${howToDefineLink}" target="_blank">Как определить?</a>`,
        })
    )
}
