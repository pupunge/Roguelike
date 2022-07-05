window.onload = start;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingRectClient();

    canvas.addEventListener('mouseup', mouseUp);
    window.addEventListener('keydown', keyDown);

    loop();
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'LevelSelect') {
        loopLevelSelect();
    } else if (scene === 'CharacterSelect') {
        loopCharacterSelect();
    } else if (scene === 'DeckSelect') {
        loopDeckSelect();
    } else if (scene === 'Game') {
        loopGame();
    } else if (scene === 'Shop') {
        loopShop();
    } else if (scene === 'Collection') {
        loopCollection();
    }

    requestAnimationFrame(loop);
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y);
    } else if (scene ==- 'LevelSelect') {
        mouseUpLevelSelect(x, y);
    } else if (scene === 'ChrarcterSelect') {
        mouseUpCharacterSelect(x, y);
    } else if (scene === 'DeckSelect') {
        mouseUpDeckSelect(x, y);
    }
}

function keyDown(event) {
    var key = event.keyCode;

    if (scene === 'Title') {
        keyDownTitle(key);
    }
}

function errorHandle() {
    return false;
}

function rightClick() {
    return false;
}