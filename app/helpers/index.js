export function getAverage(arr) {
    return Math.round(arr.reduce((akk, item) => akk + item, 0) / arr.length)
}
