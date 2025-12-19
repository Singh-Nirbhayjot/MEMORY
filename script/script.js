let pricarta = null;
let seccarta = null;

function main(){
    toglitutto();
    let scelta=document.getElementById('difficoltà').value;
    switch(scelta){
        case "Facile":
            facile();
            break;
        case "Media":
            media();
            break;
        case "Difficile":
            difficile();
            break;
    }
}
function toglitutto(){
    document.getElementById('giocof').innerHTML="";
    document.getElementById('giocom').innerHTML="";
    document.getElementById('giocod').innerHTML="";
}

function facile() {
    pricarta = null;
    seccarta = null;
    let coppie = 0;

    let giocofacile = document.getElementById('giocof');
    giocofacile.innerHTML = "";

    let mem = [
        [1,1,2,2],
        [3,3,4,4],
        [5,5,6,6],
        [7,7,8,8]
    ];

    for (let r = 0; r < mem.length; r++) {
        for (let c = 0; c < mem[r].length; c++) {
            let inrandr = Math.floor(Math.random() * mem.length);
            let inrandc = Math.floor(Math.random() * mem[inrandr].length);
            let mesc = mem[r][c];
            mem[r][c] = mem[inrandr][inrandc];
            mem[inrandr][inrandc] = mesc;
        }
    }

    for (let r = 0; r < mem.length; r++) {
        for (let c = 0; c < mem[r].length; c++) {
            let carta = document.createElement('button');
            carta.value = mem[r][c];
            carta.textContent = "";

            let foto = document.createElement('img');
            foto.src = "img/0.jpg"; 
            carta.appendChild(foto);
            carta.foto = foto;

            carta.onclick = function controllo() {
                if (carta == pricarta || carta.disabled==true){
                    return;
                }
                if (pricarta != null && seccarta != null){
                    return;
                }

                carta.foto.src = "img/" + carta.value + ".jpg";

                if (pricarta == null) {
                    pricarta = carta;
                }
                else if(seccarta==null)
                {
                    seccarta = carta;

                    if (pricarta.value == seccarta.value) {
                        pricarta.disabled = true;
                        seccarta.disabled = true;
                        coppie++;

                        pricarta = null;
                        seccarta = null;

                        if (coppie == 8) {
                            alert("BRAVO HAI VINTO");
                        }
                    } else {
                        let a = pricarta;
                        let b = seccarta;

                        setTimeout(function(){
                            a.foto.src = "img/0";
                            b.foto.src = "img/0";
                            pricarta = null;
                            seccarta = null;
                        }, 700);
                    }
                }
            }

            giocofacile.appendChild(carta);
        }
    }
}

function media() {
    pricarta = null;
    seccarta = null;
    let coppie = 0;

    let giocom = document.getElementById('giocom');
    giocom.innerHTML = "";

    let mem = [
        [1,1,2,2,3,3],
        [4,4,5,5,6,6],
        [7,7,8,8,9,9],
        [10,10,11,11,12,12]
    ];

    for (let r = 0; r < mem.length; r++) {
        for (let c = 0; c < mem[r].length; c++) {
            let inrandr = Math.floor(Math.random() * mem.length);
            let inrandc = Math.floor(Math.random() * mem[inrandr].length);
            let mesc = mem[r][c];
            mem[r][c] = mem[inrandr][inrandc];
            mem[inrandr][inrandc] = mesc;
        }
    }

    for (let r = 0; r < mem.length; r++) {
        for (let c = 0; c < mem[r].length; c++) {
            let carta = document.createElement('button');
            carta.value = mem[r][c];
            carta.textContent = "";

            let foto = document.createElement('img');
            foto.src = "img/0.jpg";
            carta.appendChild(foto);

            carta.foto = foto;

            carta.onclick = function controllo() {
                if (carta == pricarta || carta.disabled==true){
                    return;
                }
                if (pricarta != null && seccarta != null){
                    return;
                }

                carta.foto.src = "img/" + carta.value + ".jpg";

                if (pricarta == null) {
                    pricarta = carta;
                }
                else if(seccarta==null)
                {
                    seccarta = carta;

                    if (pricarta.value == seccarta.value) {
                        pricarta.disabled = true;
                        seccarta.disabled = true;
                        coppie++;

                        pricarta = null;
                        seccarta = null;

                        if (coppie == 12) {
                            alert("BRAVO HAI VINTO");
                        }
                    } else {
                        let a = pricarta;
                        let b = seccarta;

                        setTimeout(function(){
                            a.foto.src = "0";
                            b.foto.src = "0";
                            pricarta = null;
                            seccarta = null;
                        }, 700);
                    }
                }
            }

            giocom.appendChild(carta);
        }
    }
}

function difficile() {
    pricarta = null;
    seccarta = null;
    let coppie = 0;

    let giocod = document.getElementById('giocod');
    giocod.innerHTML = "";

    let mem = [
        [1,1,2,2,3,3,4,4],
        [5,5,6,6,7,7,8,8],
        [9,9,10,10,11,11,12,12],
        [13,13,14,14,15,15,16,16]
    ];

    for (let r = 0; r < mem.length; r++) {
        for (let c = 0; c < mem[r].length; c++) {
            let inrandr = Math.floor(Math.random() * mem.length);
            let inrandc = Math.floor(Math.random() * mem[inrandr].length);
            let mesc = mem[r][c];
            mem[r][c] = mem[inrandr][inrandc];
            mem[inrandr][inrandc] = mesc;
        }
    }

    for (let r = 0; r < mem.length; r++) {
        for (let c = 0; c < mem[r].length; c++) {
            let carta = document.createElement('button');
            carta.value = mem[r][c];
            carta.textContent = "";

            let foto = document.createElement('img');
            foto.src = "img/0.jpg";
            carta.appendChild(foto);

            carta.foto = foto;

            carta.onclick = function controllo() {
                if (carta == pricarta || carta.disabled==true){
                    return;
                }
                if (pricarta != null && seccarta != null){
                    return;
                }

                carta.foto.src = "img/" + carta.value + ".jpg";

                if (pricarta == null) {
                    pricarta = carta;
                }
                else if(seccarta==null)
                {
                    seccarta = carta;

                    if (pricarta.value == seccarta.value) {
                        pricarta.disabled = true;
                        seccarta.disabled = true;
                        coppie++;

                        pricarta = null;
                        seccarta = null;

                        if (coppie == 16) {
                            alert("BRAVO HAI VINTO");
                        }
                    } else {
                        let a = pricarta;
                        let b = seccarta;

                        setTimeout(function(){
                            a.foto.src = "0";
                            b.foto.src = "0";
                            pricarta = null;
                            seccarta = null;
                        }, 700);
                    }
                }
            }

            giocod.appendChild(carta);
        }
    }
}