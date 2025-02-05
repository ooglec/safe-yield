export const trimDecimalPlaces = (numStr: string, decimalPlaces: number): string => {
    // Check if the number string contains a decimal point
    const decimalIndex = numStr.indexOf(".")

    // If there's no decimal point or the number has fewer or equal decimal places, return the original string
    if (decimalIndex === -1 || numStr.length - decimalIndex - 1 <= decimalPlaces) return numStr

    // Otherwise, slice the string to the desired decimal places
    return numStr.slice(0, decimalIndex + decimalPlaces + 1)
}
