export const getInnerObject = (array, key, newKey=null) => {
    const updatedObject = []
    array.forEach((obj, index) => {
        updatedObject.push(obj[key])
        if (newKey) {
            updatedObject[index][newKey] = key
        }
    })
    return updatedObject
}