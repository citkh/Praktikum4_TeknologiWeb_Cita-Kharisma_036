let inputAngka1 = document.createElement("input");
inputAngka1.type = "number";
inputAngka1.placeholder = "Masukkan angka pertama";
inputAngka1.id = "angka1";

let inputAngka2 = document.createElement("input");
inputAngka2.type = "number";
inputAngka2.placeholder = "Masukkan angka kedua";
inputAngka2.id = "angka2";

let btnTambah = document.createElement("button");
btnTambah.textContent = "+";
btnTambah.onclick = function() {
    let angka1 = parseFloat(inputAngka1.value);
    let angka2 = parseFloat(inputAngka2.value);
    let hasil = angka1 + angka2;
    outputHasil.textContent = "Hasil: " + hasil;
};

let btnKurang = document.createElement("button");
btnKurang.textContent = "-";
btnKurang.onclick = function() {
    let angka1 = parseFloat(inputAngka1.value);
    let angka2 = parseFloat(inputAngka2.value);
    let hasil = angka1 - angka2;
    outputHasil.textContent = "Hasil: " + hasil;
};

let btnKali = document.createElement("button");
btnKali.textContent = "*";
btnKali.onclick = function() {
    let angka1 = parseFloat(inputAngka1.value);
    let angka2 = parseFloat(inputAngka2.value);
    let hasil = angka1 * angka2;
    outputHasil.textContent = "Hasil: " + hasil;
};

let btnBagi = document.createElement("button");
btnBagi.textContent = "/";
btnBagi.onclick = function() {
    let angka1 = parseFloat(inputAngka1.value);
    let angka2 = parseFloat(inputAngka2.value);
    let hasil = angka1 / angka2;
    outputHasil.textContent = "Hasil: " + hasil;
};

let outputHasil = document.createElement("p");
outputHasil.textContent = "Hasil: ";

let outputDiv = document.getElementById("output");
outputDiv.appendChild(inputAngka1);
outputDiv.appendChild(document.createElement("br"));
outputDiv.appendChild(inputAngka2);
outputDiv.appendChild(document.createElement("br"));
outputDiv.appendChild(btnTambah);
outputDiv.appendChild(btnKurang);
outputDiv.appendChild(btnKali);
outputDiv.appendChild(btnBagi);
outputDiv.appendChild(outputHasil);