function forLoop(array){
  for(var i = 0; i < 25; i++){
  array.push(`I am ${i} strange loop.`)
}
return [array, i]
}

function whileLoop(n){
  let n = 10
  while (n > 0) {
    n-=1
    }
  return n
}
