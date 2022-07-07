var UILevelSelect = {
    titleText : [8, 48],
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


}

function mouseUpLevelSelect(x, y) {

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