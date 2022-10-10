// A B C D E F G H I J  K  L  N  M
// 1 2 3 4 5 6 7 8 9 10 11 13 14 15

// O  P  Q  R  S  T  U  V  W  X  Y  Z
// 16 17 18 19 20 21 22 23 24 25 26 27

// a - 97 z - 122
// A - 65 Z -90

let btn = document.querySelector("#btn");

btn.addEventListener('click', function () {

    if (Dmsg.style.display === 'block') {
        Dmsg.style.display = 'none';
    } else {
        Dmsg.style.display = 'block';
    }

});

function codificar() {
    let msg = document.getElementById("msg").value;
    let intervalo = document.getElementById("intervalo").value;
    let Dmsg = document.getElementById("Dmsg");



    for (let i = 0; i < msg.length; i++) {
        msg = msg.charCodeAt(i)

        if (msg >= 65 && msg <= 90) {
            let code = (msg - 65 + intervalo) % 26 + 65;
            const letra = String.fromCharCode(code);
            Dmsg.innerHTML = letra
        } else if (msg >= 97 && msg <= 122) {
            let code = (msg - 97 + intervalo) % 26 + 97;
            const letra = String.fromCharCode(code);
            Dmsg.innerHTML = letra
        } else {
            msg = msg.value.toUpperCase().replace(/\s/g, '')
        }
    };

};

function Decodificar() {
    let msg = document.getElementById("msg").value;
    let Dmsg = document.getElementById("Dmsg");


    for (let i = 0; i < msg.length; i++) {
        msg = msg.charCodeAt(i)

        if (msg[i] >= 65 && msg[i] <= 90) {
            let code = (msg - 65) % 26 + 65;
            const letra = String.fromCharCode(code);
            Dmsg.innerHTML = letra
        } else if (msg[i] >= 97 && msg[i] <= 122) {
            let code = (msg - 97) % 26 + 97;
            const letra = String.fromCharCode(code);
            Dmsg.innerHTML = letra
        } else {
            msg = msg.value.toUpperCase().replace(/\s/g, '')
        }
    };
};
/// Base 64 ------------------------------------

function codar() {
    let msgnova = document.getElementById('msg1').value;
    let c = btoa(msgnova);
    DM.innerText = `${c}`

};
function descodar() {
    let des = document.getElementById('msg1').value;
    let d = atob(des);
    DM.innerText = `${d}`
    alert('Descodificando...')

}

