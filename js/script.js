var hasilLuas = document.getElementById("outputLuas");

function hitungLuas() {
    var sisi = document.getElementById("inputFieldLuas").value;
    if (isNaN(sisi) || sisi === "" || sisi <= 0) {
        alert("Jumlah sisi harus bilangan positif dan tidak boleh kosong");
        return;
    }
    const luas = eval(sisi * sisi);
    hasilLuas.innerHTML = `
        <p>Luas Persegi: <b>${luas}</b> cm2</p>
        `;
}

function resetLuas() {
    document.getElementById("inputFieldLuas").value = "";
}

var hasilKeliling = document.getElementById("outputKeliling");

function hitungKeliling() {
    var sisi = document.getElementById("inputFieldKeliling").value;
    if (isNaN(sisi) || sisi === "" || sisi <= 0) {
        alert("Jumlah sisi harus bilangan positif dan tidak boleh kosong");
        return;
    }
    const keliling = eval(4 * sisi);
    hasilKeliling.innerHTML = `
        <p>Luas Persegi: <b>${keliling}</b> cm</p>
        `;
}

function resetKeliling() {
    document.getElementById("inputFieldKeliling").value = "";
}