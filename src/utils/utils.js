export const lerp = (start, stop, amount) => {
    return ((stop - start) * amount)
}

export const getPercent = (total, percentage) => {
    return (percentage/100) * total
}

export const select = (e) => document.querySelector(e);