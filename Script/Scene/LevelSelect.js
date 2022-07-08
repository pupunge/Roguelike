var UILevelSelect = {
    titleText : [8, 48],
    backButton : [928, 32, 64, 64],
    levelList : [[128, 128, 128, 128], [320, 128, 128, 128], [512, 128, 128, 128],
                 [128, 320, 128, 128], [320, 320, 128, 128], [512, 320, 128, 128]]
};

function loopLevelSelect() {
    displayLevelSelect();
}

function displayLevelSelect() {
    context.strokeStyle = 'Black';
    context.fillStyle = 'Black';
    context.lineWidth = 2;
    context.font = '48px Opensans';

    context.clearRect(0, 0, 1024, 640);

    context.fillText(`Select Level`, UILevelSelect.titleText[0], UILevelSelect.titleText[1]);

    for (var i = 0; i < 6; i++) {
        context.strokeRect(UILevelSelect.levelList[i][0], UILevelSelect.levelList[i][1], UILevelSelect.levelList[i][2], UILevelSelect.levelList[i][3]);
    }
}

function mouseUpLevelSelect(x, y) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UILevelSelect.backButton)) {
                scene = 'Title';
            }

            for (var i = 0; i < 6; i++) {
                if (pointInsideRectArray(x, y, UILevelSelect.levelList[i])) {
                    adventure.selectedLevel = i;
                    scene = 'CharacterSelect';
                }
            }
        }
    }
}

function keyDownLevelSelect(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 27) {
                scene = 'Title';
            }
        }
    }
}