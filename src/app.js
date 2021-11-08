//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
//Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
let sayi = (...sayilar) => {
  for (let i = 2; i < sayilar.length; i++) {
    if (sayilar[i] == 2) {
      console.log(sayilar[i]);
    }
    if (
      sayilar[i] > 1 &&
      sayilar[i] % 1 == 0 &&
      sayilar[i] % sayilar[i] == 0 &&
      sayilar[i] % 2 != 0 &&
      sayilar[i] % 3 != 0 &&
      sayilar[i] % 5 != 0
    ) {
      console.log(sayilar[i]);
    }
  }
};
sayi(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47)

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

let arkadas = (sayi1, sayi2) => {
  let toplam = 0,
    toplam2 = 0;

  for (let i = 1; i <= sayi1; i++) {
    if (sayi1 % i == 0) {
      toplam2 = toplam2 + i;
    }
  }

  for (let j = 1; j <= sayi2; j++) {
    if (sayi2 % j == 0) {
      toplam = toplam + j;
    }
  }

  if (toplam == toplam2) {
    console.log(sayi1 + " ve " + sayi2 + " arkadaş sayıdır");
  } else {
    console.log(sayi1 + " ve " + sayi2 + " arkadaş sayı değildir.");
  }
};

arkadas(1184, 1210);

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız
let mukemmel = () => {
  for (let i = 1; i < 1000; i++) {
    let toplam = 0;
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        toplam = toplam + j;
      }
    }
    if (toplam == i) {
      console.log(i);
    }
  }
};

mukemmel();

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

let asalSayi = () => {
  for (let i = 1; i < 1000; i++) {
    if (i == 2) {
      console.log(i);
    }
    if (
      i > 1 &&
      i % 1 == 0 &&
      i % i == 0 &&
      i % 2 != 0 &&
      i % 3 != 0 &&
      i % 5 != 0
    ) {
      console.log(i);
    }
  }
};
  asalSayi()
