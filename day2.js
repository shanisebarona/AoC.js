///if opcode == 1, find the values of the two subsquent values positions, array[next] and array[next + 1] and then add, and place new value in the position of the following value 
//step forward 4 positions when complete

//if opcode -- 2, find the values of the two subsquent values' positions and multiple, and place new value in the posisiton of the following value
//step forward 4 from array[0] positions when complete to next opcode

//if opcode == 99, exit

//replace position 1 with the value of 12 and replace position 2 with the value of 2. 

//what value is left at position 0 after the program halts? 

const intCodes = [
  1,0,0,3,
  1,1,2,3,
  1,3,4,3,
  1,5,0,3,
  2,1,9,19,
  1,19,5,23,
  2,6,23,27,
  1,6,27,31,
  2,31,9,35,
  1,35,6,39,
  1,10,39,43,
  2,9,43,47,
  1,5,47,51,
  2,51,6,55,
  1,5,55,59,
  2,13,59,63,
  1,63,5,67,
  2,67,13,71,
  1,71,9,75,
  1,75,6,79,
  2,79,6,83,
  1,83,5,87,
  2,87,9,91,
  2,9,91,95,
  1,5,95,99,
  2,99,13,103,
  1,103,5,107,
  1,2,107,111,
  1,111,5,0,
  99,
  2,14,0,0
]

// function preRun(arr) {
//   arr[1] = 12
//   arr[2] = 2
//   return arr
// }


function gravityAssist(arr) {
  //preRun(arr)
  for (i of intCodes) {
    if (arr[i] == 1) {
      console.log(i, "hi")
    var newValue = arr[arr[i+1]] + arr[arr[i+2]]
    arr[i+3] == newValue 
    console.log(newValue, "bye")
  }
  console.log(newValue, "same")
  //return arr[i+3]
}

  // if (arr[0] == 1) {
  //   let newValue = arr[arr[1]] + arr[arr[2]]
  //   arr[3] == newValue 
  // }
  // return arr[3]




  ///if opcode == 1, find the values of the two subsquent values positions, array[next] and array[next + 1] and then add, and place new value in the position of the following value 
//step forward 4 positions when complete
} 

console.log(gravityAssist(intCodes))