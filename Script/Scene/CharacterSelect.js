var UICharacterSelect = {
    titleText : [8, 48],
    description : {
        rect : [736, 128, 256, 384]
    },

    characterList : [[128, 128, 128, 128], [320, 128, 128, 128], [512, 128, 128, 128],
                     [128, 320, 128, 128], [320, 320, 128, 128], [512, 320, 128, 128]],

    startButton : [736, 544, 256, 64],
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

    // Character button area
    for (var i = 0; i < 6; i++) {
        context.strokeRect(UICharacterSelect.characterList[i][0], UICharacterSelect.characterList[i][1], UICharacterSelect.characterList[i][2], UICharacterSelect.characterList[i][3]);
    }

    // Description area
    context.strokeRect(UICharacterSelect.description.rect[0], UICharacterSelect.description.rect[1], UICharacterSelect.description.rect[2], UICharacterSelect.description.rect[3]);

    context.strokeRect(UICharacterSelect.startButton[0], UICharacterSelect.startButton[1], UICharacterSelect.startButton[2], UICharacterSelect.startButton[3]);
}

function mouseUpCharacterSelect(x, y) {

}

function keyDownCharacterSelect(key) {
    
}