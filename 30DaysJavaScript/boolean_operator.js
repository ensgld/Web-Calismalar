let isRaining= true
isRaining 
? console.log('You need a rain coat') 
: console.log('No need for a raincoat')

5>4 ? console.log("Evet 5 büyüktür 4'ten"):console.log("Hayır küçüktür")

let num=5
num>0? console.log(`${num}pozitiftir.`)
: console.log(`${num}negatiftir.`)

let number = prompt('Bir sayı giriniz')//scanner methodu gibi
let number1 = prompt('Bir sayı giriniz','Pozitif olmalı')//scanner methodu gibi ama bunda uyarı veriyor gibi kullanıcıya
let isDelete = confirm('Silmek istediğine emin misin?') //kullanıcıya bir alertte uyarı gider evet derse true olur hayır derse false olur
console.log(isDelete? 'Silme işlemi başarılı': 'Silme işlemi tamamlanmadı')//if else mantığı aynı 

const now = new Date()
console.log(now)
console.log(now.getDay)
let year= now.getFullYear
let month= now.getMonth
let dayname= now.getDate
let hour= now.getHours
let minute= now.getMinutes
let second= now.getSeconds
let daynumber= now.getDay
let months=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
let days=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
let dateHumanReadable = `${daynumber} ${months[month]} ${year}${days[dayname]} ${hour} ${minute} ${second}`
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'