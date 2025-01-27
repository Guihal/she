import { elementReady } from './elementReady'

export async function moveOrderText() {
    const order = await elementReady('.t-store__prod-snippet__container .t-store__prod-popup__btn')
    const text = await elementReady('.t-store__prod-snippet__container .t-store__prod-popup__btn .js-store-prod-popup-buy-btn-txt')

    order.innerHTML = text.textContent
}
