export function capitalizeFirstLetter(string) {
    if (typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return `${string}`
}

export function cleanHyphens(string) {
    return string.split('-').join(' ')
}