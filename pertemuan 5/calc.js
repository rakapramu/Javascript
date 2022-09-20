// tambah
function tambah() {
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2; //rumus
    frm.hasil.value = total; //penempatan hasil
}

// kurang
function kurang() {
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2; //rumus
    frm.hasil.value = total; //penempatan hasil
}

// kali
function kali() {
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2; //rumus
    frm.hasil.value = total; //penempatan hasil
}

// bagi
function bagi() {
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2; //rumus
    frm.hasil.value = total; //penempatan hasil
}

// pangkat
function pangkat() {
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 ** a2; //rumus
    frm.hasil.value = total; //penempatan hasil
}

function hitung() {
    // tangkap id form
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var tombol = frm.btn.value;

    if (isNaN(a1) || isNaN(a2)) {
        alert("Masukkan angka")
    } else {
        switch (tombol) {
            case 'tambah':
                if (isNaN(a1) && isNaN(a2)) {
                    alert('harap masukkan angka');
                } else {
                    tambah();
                }
                break;
            case 'kurang':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    kurang();
                }
                break;
            case 'kali':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    kali();
                }
                break;
            case 'bagi':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    bagi();
                }
                break;
            case 'pangkat':
                if (isNaN(a1) || isNaN(a2)) {
                    alert("harap masukkan angka");
                } else {
                    pangkat();
                }
                break;
        }
    }
}