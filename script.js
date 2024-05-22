// Liste di numeri basate sulla presenza dei bit da 1 a 6
const liste = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59],
    [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59],
    [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60],
    [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
];

let numero = 0;
let indice = 0;

function iniziaGioco() {
    document.getElementById('risultato').innerHTML = '';
    numero = 0;
    indice = 0;
    mostraDomanda();
}

function mostraDomanda() {
    if (indice < 6) {
        const domandaDiv = document.getElementById('domande');
        domandaDiv.innerHTML = `
            <p>Il tuo numero è in questa lista? ${liste[indice].join(', ')} (s/n):</p>
            <button onclick="rispondi(true)">Sì</button>
            <button onclick="rispondi(false)">No</button>
        `;
    } else {
        document.getElementById('domande').innerHTML = '';
        document.getElementById('risultato').innerHTML = `Il numero che hai pensato è ${numero}.`;
    }
}

function rispondi(ePresente) {
    if (ePresente) {
        numero += 2 ** indice;
    }
    indice++;
    mostraDomanda();
}
