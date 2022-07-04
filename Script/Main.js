window.onload = start;
window.onerror = errorHandle;
window.oncontextmenu = rightClick;

function start() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingRectClient();

    loop();
}

function loop() {
    
}

function errorHandle() {

}

function rightClick() {
    return false;
}