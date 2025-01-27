import { elementReady } from './elementReady'

export async function moveAccordionsTilda() {
    const wrapper = await elementReady('.t-store__prod-popup__info')
    const accordions = await elementReady('.js-store-tabs')

    wrapper.append(accordions)
}
