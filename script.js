const timer = document.getElementById("timer");
let appointedDay = new Date(2022, 7 - 1, 17, 19, 10, 0);

function clock() {
    const presently = new Date();
    let d = "00";
    let h = "00";
    let m = "00";
    let s = "00";

    if (presently < appointedDay) {
        const milliseconds = appointedDay - presently;
        s = milliseconds / 1000;
        m = s / 60;
        h = m / 60;
        d = h / 24;

        d = checkTime(d, 0);
        h = checkTime(h, 24);
        m = checkTime(m, 60);
        s = checkTime(s, 60);
    }
    timer.innerHTML = `${d} : ${h} : ${m} : ${s}`;
    setTimeout('clock()', 500);
}

function checkTime(i, limit) {
    i = (i).toFixed();
    i = limit == 0 ? i : i % limit;

    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function Show(obj) {
    const modal = document.getElementById(obj);

    modal.classList.toggle("hidden")
}

function addCountDown() {
    const dateTime = document.getElementById("dateTime").value;

    appointedDay = new Date(dateTime);

    clock();
    Show('time')
}

function subscribe() {
    const subscribe = document.getElementById('email').value;
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subscribe)

    if (validEmail) {
        alert(`inscrito com sucesso\n(lembrando que esse site é meramente um estudo de front-end, por tanto não envia um e-mail ou inscreve)`);
    } else {
        alert('Por favor, digite um e-mail valido');
    }
}