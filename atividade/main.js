var p = "JAVASCRIPT";
var x = [];
var y = 0;
var z = [];
var t = document.getElementById("lettersBox");
var u = document.getElementById("hangmanBox");
var m = document.getElementById("messageBox");
var n = document.getElementById("usedLetters");
let hangmanImage = document.getElementById("hangmanImage");

for (var k = 0; k < p.length; k = k + 1) {
    x.push("_");
}

u.innerHTML = " +---+<br> |   |<br>     |<br>     |<br>     |<br>     |<br>=======";
t.innerHTML = x.join(" ");

function tentar() {
    var l = document.getElementById("inputLetter").value.toUpperCase();
    document.getElementById("inputLetter").value = "";

    if (l == "") {
        m.innerHTML = "digite uma letra";
        return;
    }

    if (z.indexOf(l) >= 0) {
        m.innerHTML = "letra repetida";
        return;
    }

    z.push(l);

    var ok = false;

    for (var q = 0; q < p.length; q = q + 1) {
        if (p[q] == l) {
            x[q] = l;
            ok = true;
        }
    }

    if (ok == false) {
        y = y + 1;
    }

    t.innerHTML = x.join(" ");
    n.innerHTML = "Letras usadas: " + z.join(", ");

    if (y == 0) {
        u.innerHTML = " +---+<br> |   |<br>     |<br>     |<br>     |<br>     |<br>=======";
    }
    if (y == 1) {
        hangmanImage.src = "./assets/Stage1.png"
        u.innerHTML = " +---+<br> |   |<br> O   |<br>     |<br>     |<br>     |<br>=======";
    }
    if (y == 2) {
        hangmanImage.src = "./assets/Stage2.png"
        u.innerHTML = " +---+<br> |   |<br> O   |<br> |   |<br>     |<br>     |<br>=======";
    }
    if (y == 3) {
        hangmanImage.src = "./assets/Stage3.png"
        u.innerHTML = " +---+<br> |   |<br> O   |<br>/|   |<br>     |<br>     |<br>=======";
    }
    if (y == 4) {
        hangmanImage.src = "./assets/Stage4.png"
        u.innerHTML = " +---+<br> |   |<br> O   |<br>/|\\  |<br>     |<br>     |<br>=======";
    }
    if (y == 5) {
        u.innerHTML = " +---+<br> |   |<br> O   |<br>/|\\  |<br>/    |<br>     |<br>=======";
    }
    if (y == 6) {
        u.innerHTML = " +---+<br> |   |<br> O   |<br>/|\\  |<br>/ \\  |<br>     |<br>=======";
        m.innerHTML = "você perdeu! a palavra era " + p;
        document.getElementById("i").disabled = true;
    }

    if (x.join("") == p) {
        m.innerHTML = "você venceu!";
        document.getElementById("inputLetter").disabled = true;
    }
}