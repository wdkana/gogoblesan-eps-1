// ambil elemen yang dibutuhkan
let targetObject = document.getElementById('targetObject');
let inputHexa = document.getElementById('inputHexa');

// kondisi button diklik
function ubahLatar() {
      // ubah background target object
      targetObject.style.backgroundColor = inputHexa.value
};
