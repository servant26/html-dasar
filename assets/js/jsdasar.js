//Contoh Sintaks Dasar
console.log("Halo nama saya Ali Khatami, saya dari kelas FSWD")

//Contoh variable
var nama = "ali";
console.log(nama); //nanti dia akan mengeluarkan nilai dari variable nama, yaitu ali

const prodi = "sistem informasi";
console.log(prodi); //data prodi tidak akan berubah karna dia menggunakan tipe const (data mutlak)


//tipe data terbagi menjadi 2, yaitu primitive dan non-primitive

//Contoh tipe data primitive diantaranya seperti number, string, boolean
var umur = 20;
console.log(umur); //hasilnya adalah number karna js mendeteksi bahwa ini variable number (angka)

var nama_panjang = "Ali Khatami";
console.log(nama_panjang); //hasilnya adalah data berupa string karna ini termasuk data teks (string)

var trufals = 1 > 2;
console.log(trufals); //hasilnya akan false karna ini tipe data boolean, dan pernyataan diatas tidak benar

var ide = null;
console.log(ide); //hasilnya hanya null

var kosong;
console.log(kosong) //hasilnya akan undefined karna kita belum memasukkan isi dari variablenya


//contoh tipe data non-primitive adalah seperti object
var bio = {
	name : "ali",
	age : 21,
	status : "student",
	hobbies : ["football" ,"watching anime"]
};

//jika ingin menampilkan seluruh data object
console.log(bio);

//jika ingin menampilkan salah satu data dari object, dalam contoh ini age
console.log(bio.status);

//jika ingin menampilkan object dalam object, dalam contoh ini watching anime (index ke-1)
console.log(bio.hobbies[1]);

//konversi tipe data

//operator javascript terbagi menjadi 6, yaitu aritmetik, assignment, comparison, logical, bitwise, dan ternary
//aritmetik (operasi matematika)
var aritmetik1 = 5;
var aritmetik2 = 2;
console.log(aritmetik1 + aritmetik2); //akan menghasilkan 7, bisa menerapkan operasi matematika lain juga seperti pengurangan, 
//perkalian, pembagian, dan modulus

//assignment (penugasan)
var assignment1 = 9;
console.log(assignment1);

assignment1+=1;
console.log(assignment1);

//comparison (perbandingan) hasilnya hanya berupa true atau false
var comparison1 = 7;
var comparison2 = 10;
console.log(comparison1 > comparison2); //hasilnya akan false karna comparison1 yang bernilai 7 tidak lebih besar dari comparison2
//yaitu 10

//operator logika
var logical1 = 12 > 10 && 10 > 7;
console.log (logical1); //hasilnya akan true karna syarat logika and adalah keduanya harus berstatement benar

//bitwise
var bitwise1 = 00111100;
var bitwise2 = 00001101;
console.log(bitwise1 & bitwise2);

//ternary
var ternary1 = 8;
var ternary2 = 6;
console.log(ternary1 == ternary2 ? "yes" : "no");

//contoh alert
alert("Hi selamat datang, ini merupakan salah satu penerapan dari alert");

//contoh prompt
var tanya_nama = prompt("Masukkan nama kamu (ini contoh dari prompt)");
alert("Oke, selamat datang " + tanya_nama);

//contoh konfirmasi
var konfirm = prompt("Udah kerjain tugasnya belum? (ketik udah/belum) ini contoh dari confirm");
if(konfirm == "udah"){
	alert("hebat, kamu keren");
}else if(konfirm == "belum"){
	alert("segera kerjakan sebelum deadline yaa");
}else{
	alert("pilihanmu diluar opsi, silahkan jawab udah/belum aja");
}
//atau kita bisa juga menggunakan switch, percabangan if else dengan switch sebenarnya sama saja

//contoh perulangan for
for (var i = 0; i < 5; i++) {
  console.log(`Perulangan ke ${i}`);
}

//contoh perulangan do while
var i = 0;
do{
	console.log(`Perulangan ke ${i}`);
	i++;
} while (i < 3);


//contoh perulangan while
var i = 0;
while(i < 2){
	console.log(`Perulangan ke ${i}`);
	i++;
}

//contoh break
for (var i = 0; i < 6; i++) {
  if (i == 5) {
    break;
  }
  console.log(`Perulangan ke ${i}`);
}

//contoh continue
for (var i = 0; i < 5; i++) {
  if (i == 2) {
    continue;
  }
  console.log(`Perulangan ke ${i}`);
}
