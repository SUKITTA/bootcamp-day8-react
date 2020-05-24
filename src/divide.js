// export const divide = (x, y) => x/y


export const divide = (x, y) => {
    if ( y === 0) throw Error('Can not divide by zero')
    return x/y
}