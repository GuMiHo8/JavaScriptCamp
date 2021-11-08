console.log("Merhaba Kodlama.io")

// ; kullanımı önemli değil kullanmasan da olur.
//JS type safe değildir
let dolarBugun = 9.67

let dolarDun = 9.50
dolarDun = "9.53"
{
    let dolarDun = 9.40
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 const old. için yapılamıyor.

console.log(euroDun)

//array
//camelCasing --> değişken tanımlamaları
//PascalCasing --> sınıf ve metot isimleri  vb.(her dilde değişiyor)
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
// ctrl+k+c yorum satırı yapar
{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)