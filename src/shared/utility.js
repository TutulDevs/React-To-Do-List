export const updatedObj = (oldObj, updatedValue) => {
    return {
        ...oldObj,
        ...updatedValue,
    }
}