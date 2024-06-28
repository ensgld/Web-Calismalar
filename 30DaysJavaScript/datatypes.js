let numOne=3
let numTwo=3
console.log(numOne==numTwo) 
let nums = [1,2,3,4,5,6]
let ads = [1,2,'Enes',3.5,undefined,[4,8,9]]
console.log(nums)
console.log(ads)
let userOne ={
    name:'Enes',
    surname:'Geldi'
}
console.log(Math.round(9.81))
console.log(Math.ceil(9.81))
console.log(Math.floor(9.81))
console.log(Math.min(9.81,10,5,4,2))
console.log(Math.max(9.81,10,5,4,2))
const randomNum= Math.random()//0 ile 0.1 arasında rastgele sayılar üretir
const randomNum1 = Math.floor(Math.random()*11)//0 ile 10 arasında sayılar üretir
console.log(Math.abs(-10))
console.log(Math.sqrt(100))
console.log(Math.pow(3,2))
console.log(3**2)
const paragraph = "My name is Asabeneh Yetayeh.\
 I live in Finland, Helsinki.\
 I am a teacher and I love teaching.\
  I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
let name= 'Enes'
let surname='Geldi'
let fullname=`${name} ${surname}`
console.log(fullname)
let a =5
let b=4
let result= `${a+b}`
console.log(result)
console.log(`${a} is a greather than ${b}: ${a>b}`)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7 /javascript/gi bu şekilde yazılan şeye regular expression diyoruz
//gi da g:global i:case insenstive
let str='love'//bu bir stringdir
let patternOne= /love/ //bu ise regex desenidir without flag
let patternTwo = /love/gi // gi is a flag
let string1 = 'I Love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string1.match('love'))
console.log(string1.match(/love/))
console.log(string1.match(/love/g))
console.log(string1.match(/love/gi))
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/ // \d is a meaning of digit
console.log(txt.match(regEx)) //2,0,1,9 diye çıkarır
console.log(txt.match(/\d+/g)) // g flagini koyarsak 2019,30,2020 diye ayırır
let stringNum='5'
let intNum =+stringNum
console.log(typeof(intNum))
let intNum1 =parseInt(stringNum)