export const increment = () => {
    return {
      type: "INCREMENT",
    }
  }
  
export const decrement = () => {
    return {
      type: "DECREMENT",
    }
}

export const incrementByNumber = (number) => {
    return {
        type: "ICRBYNUM",
        payload: parseInt(number)
    }
}

export const decrementByNumber = (number) => {
    return {
        type: "DCRBYNUM",
        payload: parseInt(number)
    }
}