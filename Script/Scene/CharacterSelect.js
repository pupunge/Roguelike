var UICharacterSelect = {
    titleText : [8, 48],
    description : {
        rect : [736, 32, 256, 576]
    },
};

function loopCharacterSelect() {
    displayCharacterSelect();
}

function displayCharacterSelect() {
    context.strokeStyle = 'Black';
    context.fillStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select Character`, UICharacterSelect.titleText[0], UICharacterSelect.titleText[1]);
}

function mouseUpCharacterSelect(x, y) {

}

function keyDownCharacterSelect(key) {
    
}