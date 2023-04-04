const CURRENCYFORMATTER = {
    currency: 'USD',
    style: 'currency'
}

export function formatCurrency(number) {
    return CURRENCYFORMATTER.format(number)
}