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
    pricarta = null;   //pricarta significa primacarta
    seccarta = null;   //seccarta seconda carta non avevo voglia di scrivere
    let coppie = 0;

    let giocofacile = document.getElementById('giocof');
    giocofacile.innerHTML = "";

    let mem=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];  //mem significa memory

    for (let i = 0; i < mem.length; i++) {
        let inrand = Math.floor(Math.random() * mem.length);  //inrand non è un insulto ma significa indicerandom (:
        let mesc = mem[i];
        mem[i] = mem[inrand];
        mem[inrand] = mesc;
    }

    for (let i = 0; i < mem.length; i++) {
        let carta = document.createElement('button');
        carta.value = mem[i];
        carta.textContent = "";

        carta.onclick = function controllo() {
            if (carta == pricarta || carta.disabled==true){ 
                return;
            }
            carta.textContent = carta.value;
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
                } else {
                        pricarta.textContent = "";
                        seccarta.textContent = "";
                }
                    pricarta = null;
                    seccarta = null;

                    if (coppie == 8) {
                        alert("BRAVO HAI VINTO");
                    }
        }
    }
        giocof.appendChild(carta);
    
}
}
function media() {
    pricarta = null;
    seccarta = null;
    let coppie = 0;

    let giocom = document.getElementById('giocom');
    giocom.innerHTML = "";

    let mem=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];

    for (let i = 0; i < mem.length; i++) {
        let inrand = Math.floor(Math.random() * mem.length);
        let mesc = mem[i];
        mem[i] = mem[inrand];
        mem[inrand] = mesc;
    }

    for (let i = 0; i < mem.length; i++) {
        let carta = document.createElement('button');
        carta.value = mem[i];
        carta.textContent = "";

        carta.onclick = function controllo() {
            if (carta == pricarta || carta.disabled==true){ 
                return;
            }
            carta.textContent = carta.value;
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
                } else {
                        pricarta.textContent = "";
                        seccarta.textContent = "";
                }
                    pricarta = null;
                    seccarta = null;

                    if (coppie == 12) {
                        alert("BRAVO HAI VINTO");
                    }
        }
    }
        giocom.appendChild(carta);
    
}
}

function difficile() {
    pricarta = null;
    seccarta = null;
    let coppie = 0;

    let giocod = document.getElementById('giocod');
    giocod.innerHTML = "";

    let mem=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16];

    for (let i = 0; i < mem.length; i++) {
        let inrand = Math.floor(Math.random() * mem.length);
        let mesc = mem[i];
        mem[i] = mem[inrand];
        mem[inrand] = mesc;
    }

    for (let i = 0; i < mem.length; i++) {
        let carta = document.createElement('button');
        carta.value = mem[i];
        carta.textContent = "";

        carta.onclick = function controllo() {
            if (carta == pricarta || carta.disabled==true){ 
                return;
            }
            carta.textContent = carta.value;
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
                } else {
                        pricarta.textContent = "";
                        seccarta.textContent = "";
                }
                    pricarta = null;
                    seccarta = null;

                    if (coppie == 16) {
                        alert("BRAVO HAI VINTO");
                    }
        }
    }
        giocod.appendChild(carta);
}
}