const ganjil = [];
const genap = [];

//menentukan bilangna ganjil dengan array push
for (let i = 15; i <= 60; i++) {
    if (i % 2 == 0) {
        genap.push(i);
    } else {
        ganjil.push(i);
    }
}

console.log("Ganjil : \n" + ganjil + "\nGenap :\n " + genap);