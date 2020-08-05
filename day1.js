//store the input in an array
//iterate over each
//each mass amount should be divided by 3, rounded down, and subtracted from by 2
//add each fuel per mass amount to each other for total fuel amount
//reduce?

const moduleMass = [
85364,
97431,
135519,
119130,
137800,
85946,
146593,
141318,
103590,
138858,
92329,
94292,
132098,
144266,
72908,
112896,
87046,
133058,
141121,
74681,
83458,
107417,
121426,
66005,
106094,
96458,
113316,
142676,
79186,
55480,
147821,
116419,
70532,
105344,
116797,
126387,
139600,
136382,
121330,
123485,
134336,
141201,
131556,
91346,
117939,
58373,
129325,
102237,
60644,
96712,
126342,
98939,
66305,
111403,
143257,
58721,
55552,
139078,
74263,
125989,
90904,
91058,
92130,
53176,
81369,
100856,
110597,
111141,
129749,
123822,
75321,
80963,
102625,
70161,
107069,
117982,
86443,
95627,
147801,
149508,
101470,
81879,
133396,
82276,
144803,
67049,
127735,
121064,
122975,
69435,
139132,
141284,
70798,
117921,
108942,
85662,
75438,
122699,
116654,
126797
]

//1st try, working
// const totalFuel = moduleMass.reduce(function(sum, mass) {
//   let total = (Math.floor((mass / 3)) - 2)
//   return total + sum
// }, 0)

// console.log(totalFuel)

//refactor, working
// const cb = function(sum, mass) {
//   let total = (Math.floor((mass / 3)) - 2)
//   return total + sum
// }

// function totalFuel(array, cb) {
//   let moduleTotal = array.reduce(cb, 0)
//   return moduleTotal
// }

// console.log(totalFuel(moduleMass, cb))

//incorporates part 2 of problem, working
// function fuelCounter(array) {
//   let totalFuel = 0
//   initFuelPerMod = []

//   for (i of array) {
//     let modFuel = (Math.floor((i / 3)) - 2)
//     totalFuel += modFuel
//     initFuelPerMod.push(modFuel)
//   }

//   for (i of initFuelPerMod) {
//     let fuelPerFuel = (Math.floor((i / 3)) - 2)
//     if (fuelPerFuel > 0) {
//       totalFuel += fuelPerFuel
//       initFuelPerMod.push(fuelPerFuel)
//     }
//   }
//   return totalFuel
// }

//lol another refactor, full problem, working
// function fuelCounter(array) {
//   let totalFuel = 0

//   for (i of array) {
//     let fuelPerMod = (Math.floor((i / 3)) - 2)
//     if (fuelPerMod > 0) {
//       totalFuel += fuelPerMod
//       array.push(fuelPerMod)
//     }
//   }
//   return totalFuel
// }

//yet another refactor, trying to make reduce work for full problem, currently not working
function fuelCounter(array, cb) {
  let totalFuel = 0
  let allFuel = array.reduce(cb, 0) 
  if (allFuel > 0) {
    totalFuel += allFuel
    array.push(allFuel)
  }
  return allFuel
}

function cb(totalFuel, i) {
  let fuelPerMod = (Math.floor((i / 3)) - 2)
  return fuelPerMod
}

console.log(fuelCounter(moduleMass))