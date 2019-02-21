function pyramide(nmb) {
    for (x = 1; x <= nmb; x++) {
        let res = ''
        for (y = 1; y <= nmb - x; y++) {
            res += ' ';
        }
        for (y = 1; y <= x; y++) {
            res += '#';
        }
        console.log(res);
    }
}


let nmb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramide(nmb)