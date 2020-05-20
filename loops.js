function forLoop(array){
  for(var i = 0; i < 25; i++){
  array.push(`I am ${i} strange loop.`)
}
return [array, i]
}

function whileLoop (number){
  while (number>0){
    console.log(--number)
  }
  return 'done'
}
