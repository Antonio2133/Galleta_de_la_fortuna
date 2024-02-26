
const getRandom = (arr) => {
  const indexR = Math.floor(Math.random() * arr.length)
  return arr[indexR]
}

export default getRandom