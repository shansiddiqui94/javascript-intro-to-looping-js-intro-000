function forLoop(array){
  for(var i = 0; i < 25; i++){
  array.push(`I am ${i} strange loop.`)
}
return [array, i]
}

function whileLoop(n){
  var done = 0
  while (n > done) {
    n-=1
    }
  return n
}
