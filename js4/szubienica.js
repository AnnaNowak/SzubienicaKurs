let haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

let dlugosc = haslo.length;
let ile_skuch = 0;
let haslo1 = "";
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");


for (i = 0; i < dlugosc; i++) {
    //tym haslo.charAt(i) dostajemy się do konkretnej szufladki, której numer to "i"

    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

//window.onload = () => document.getElementById("plansza").innerHTML = haslo


let litery = new Array(35);
litery [0] = "A";
litery [1] = "Ą";
litery [2] = "B";
litery [3] = "C";
litery [4] = "Ć";
litery [5] = "D";
litery [6] = "E";
litery [7] = "Ę";
litery [8] = "F";
litery [9] = "G";
litery [10] = "H";
litery [11] = "I";
litery [12] = "J";
litery [13] = "K";
litery [14] = "L";
litery [15] = "Ł";
litery [16] = "M";
litery [17] = "N";
litery [18] = "Ń";
litery [19] = "O";
litery [20] = "Ó";
litery [21] = "P";
litery [22] = "Q";
litery [23] = "R";
litery [24] = "S";
litery [25] = "Ś";
litery [26] = "T";
litery [27] = "U";
litery [28] = "V";
litery [29] = "W";
litery [30] = "X";
litery [31] = "Y";
litery [32] = "Z";
litery [33] = "Ź";
litery [34] = "Ż";


function start() {

    let tresc_diva = "";
    for (let i = 0; i <= 34; i++) {

        let element = "lit" + i;

        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 === 0) tresc_diva = tresc_diva + '<div style="clear:both"></div>';
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;
    wypisz_haslo();
}


String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr) {

    let trafiona = false;

    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona == true) {
        yes.play();
        let element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00c000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        wypisz_haslo();
    }
    else {
        let element = "lit" + nr;
        no.play();
        document.getElementById(element).style.background = "#300000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        //skucha
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="" />';
    }

    //wygrana
    if (haslo == haslo1)
        document.getElementById("alfabet").innerHTML = "Tak jest, podano prawidłowe hasło: " + haslo + '<br><br> <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'

    //przegrana
    if (ile_skuch>=9)
        document.getElementById("alfabet").innerHTML = "Przegrałeś! Hasło to: " + haslo + '<br><br> <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'


}