'use strict'

// Synchronous
function suma (a, b) {
  return a + b
}

let result = suma(3, 7)
console.log(result)

// Asynchronous
function sumaAsync (a, b, callback) {
  let result = a + b

  callback(result)
}

sumaAsync(5, 9, function (result) {
  console.log(result)
})
