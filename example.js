
const words = ['hello', 'world', 'almabetter'];

//the second declation like this
const words1=new Array('visgal','shubham','sagar')

console.log(words[0])
console.log(words[1])

words.push('map');
console.log(words)


words.unshift('swap')
console.log(words)
console.log(words.length)
const newArray=words.concat(words1)
console.log(newArray)
console.log(words.indexOf('swap'))
