function hitungLuas(alas, tinggi) {
    return alas * tinggi;
}

let luas1 = hitungLuas(10, 8);
let luas2 = hitungLuas(12, 6);

console.log("Luas jajar genjang dengan alas 10 dan tinggi 8 adalah: " + luas1);
console.log("Luas jajar genjang dengan alas 12 dan tinggi 6 adalah: " + luas2);

// Menampilkan hasil ke halaman HTML
document.getElementById("hasil").innerHTML = `
    <p>Luas jajar genjang dengan alas 10 dan tinggi 8 adalah: ${luas1}</p>
    <p>Luas jajar genjang dengan alas 12 dan tinggi 6 adalah: ${luas2}</p>
`;